import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SignalrService {
    private connection: signalR.HubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:8081/chat').build();

    private receivedMessageObject!: IMessage;
    private sharedObj = new Subject<IMessage>();

    constructor() {
        this.connection.onclose(async () => {
            await this.start();
        });
        this.connection.on('SendMessage', (user, message) => {
            this.mapReceivedMessage(user, message);
        });
        this.start();
    }

    public async start() {
        await this.connection
            .start()
            .then(() => console.log('Connection started'))
            .catch((err) => {
                console.log('Error while starting connection: ' + err);
                setTimeout(() => this.start(), 5000);
            });
    }

    private mapReceivedMessage(user: string, message: string): void {
        this.receivedMessageObject = {
            user: user,
            text: message,
        };
        this.sharedObj.next(this.receivedMessageObject);
    }

    public joinGroup = (groupId: string) => {
        this.connection.invoke('JoinGroup', groupId).catch((err) => console.error(err));
    };

    public sendMessageToGroup = (groupId: string, sender: string, message: string) => {
        this.connection.invoke('SendMessageToGroup', groupId, sender, message).catch((err) => console.error(err));
    };

    public retrieveMappedObject(): Observable<IMessage> {
        return this.sharedObj.asObservable();
    }
}

export interface IMessage {
    user: string;
    text: string;
}
