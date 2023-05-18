import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './room.component.html',
})
export class RoomComponent implements OnInit {
    public roomId!: string;

    constructor(private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.roomId = this.route.snapshot.paramMap.get('id')!;
    }
}
