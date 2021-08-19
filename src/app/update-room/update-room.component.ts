import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id!: number;
  room!: Room;
  submitted!: false; 


  constructor(
    private roomService: RoomService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.route.snapshot.params['id']

    this.roomService.getRoom(this.id)
      .subscribe(data =>{
        console.log(data);
        this.room = data 
      },
      error =>  console.log(error)
    );
  }

  updateRoom(){
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => console.log(data), error => console.log(error));
      this.room = new Room();
      this.gotoList();
  }

  onSubmit(){
    this.updateRoom();
  }

  gotoList(){
    this.router.navigate(['/rooms'])
  }

}
