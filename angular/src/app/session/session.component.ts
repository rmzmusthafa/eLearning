import { Component, OnInit } from '@angular/core';
import { Session } from '../model/Session';
import { UserService } from '../user.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  session : Session[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.listAllSessionForStuddent(+sessionStorage.getItem("userId")).subscribe(
      (sessions:Session[])=>{
        this.session=sessions;
      }
    )

  }

}
