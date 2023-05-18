import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoom, RoomService } from '@core/services/room.service';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute) {}

    public createRoom(): void {
        this.roomService
            .createRoom()
            .pipe(take(1))
            .subscribe((room: IRoom) => {
                this.router.navigate(['room', room.roomId], { relativeTo: this.route });
            });
    }

    public enterRoom(roomId: string): void {
        this.router.navigate(['room', roomId], { relativeTo: this.route });
    }
}
