import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'room',
        loadChildren: () => import('@modules/room/room.module').then((m) => m.RoomModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
