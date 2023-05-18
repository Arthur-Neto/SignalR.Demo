import { NgModule } from '@angular/core';
import { RoomComponent } from './room.component';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
    imports: [CommonModule, RoomRoutingModule],
    declarations: [RoomComponent],
})
export class RoomModule {}
