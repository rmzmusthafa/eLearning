import { Component, OnInit } from '@angular/core';
import { Session } from '../model/Session';
import { UserService } from '../user.service';

@Component({
  selector: 'app-schedule-tutor',
  templateUrl: './schedule-tutor.component.html',
  styleUrls: ['./schedule-tutor.component.css']
})
export class ScheduleTutorComponent implements OnInit {

  session : Session[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.listAllSessionForTutor(+sessionStorage.getItem("userId")).subscribe(
      (sessions:Session[])=>{
        this.session=sessions;
      }
    )

}
}
