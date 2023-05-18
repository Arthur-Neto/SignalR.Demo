import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SignalrService {
    public hubHelloMessage: BehaviorSubject<string>;
    public connection: any;

    private hubUrl: string;

    constructor() {
        this.hubUrl = 'https://localhost:8081/chat';
        this.hubHelloMessage = new BehaviorSubject<string>('');
    }

    public async initiateSignalrConnection(): Promise<void> {
        try {
            this.connection = new signalR.HubConnectionBuilder().withUrl(this.hubUrl).withAutomaticReconnect().build();

            await this.connection.start();

            this.setSignalrClientMethods();

            console.log(`SignalR connection success! connectionId: ${this.connection.connectionId}`);
        } catch (error) {
            console.log(`SignalR connection error: ${error}`);
        }
    }

    private setSignalrClientMethods(): void {
        this.connection.on('DisplayMessage', (message: string) => {
            this.hubHelloMessage.next(message);
        });
    }
}
