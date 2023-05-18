import { NgModule } from '@angular/core';
import { RoomComponent } from './room.component';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [CommonModule, RoomRoutingModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule],
    declarations: [RoomComponent],
})
export class RoomModule {}
