import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRoomComponent } from 'src/app/create-room/create-room.component';
import { RoomDetailsComponent } from 'src/app/room-details/room-details.component';
import { RoomListComponent } from 'src/app/room-list/room-list.component';
import { UpdateRoomComponent } from 'src/app/update-room/update-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'rooms',   pathMatch: 'full' },
  { path: 'rooms', component: RoomListComponent },
  { path: 'add', component: CreateRoomComponent },
  { path: 'update/:id', component: UpdateRoomComponent },
  { path: 'details/:id', component: RoomDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
