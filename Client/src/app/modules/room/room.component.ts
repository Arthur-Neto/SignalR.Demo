import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMessage, SignalrService } from '@core/services/signalr.service';

@Component({
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
    public roomId!: string;

    public message: IMessage = {
        text: '',
        user: '',
    };
    public messagesReceived: IMessage[] = [];

    constructor(private route: ActivatedRoute, private signalRService: SignalrService) {}

    public ngOnInit(): void {
        this.roomId = this.route.snapshot.paramMap.get('id')!;

        setTimeout(() => {
            this.signalRService.joinGroup(this.roomId);
        }, 500);

        this.signalRService.retrieveMappedObject().subscribe((receivedObj: IMessage) => {
            this.addToInbox(receivedObj);
        });
    }

    public send(): void {
        if (this.message.user.length == 0 || this.message.user.length == 0) {
            window.alert('Both fields are required.');
            return;
        } else {
            this.signalRService.sendMessageToGroup(this.roomId, this.message.user, this.message.text);
        }
    }

    public addToInbox(obj: IMessage) {
        const newObj: IMessage = {
            user: obj.user,
            text: obj.text,
        };
        this.messagesReceived.push(newObj);
    }
}
