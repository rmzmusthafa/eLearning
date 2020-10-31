import { Component, OnInit } from '@angular/core';
import { User } from "../model/user";
import { UserService } from '../user.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private userService : UserService) { }

  users:User[];

  tutors:User[];

  sessionTime: string;

  selectedTutor:any;

  datetime:any;

  

  userId:number =+sessionStorage.getItem("userId");
  
  

  ngOnInit(): void {
    this.userService.getAllStudents().subscribe((students : User[])=>{
      this.users = students;

    })

    this.userService.getAllTutors().subscribe((tutors : User[])=>{
      this.tutors = tutors;

    })
  }

  saveSession(user:User){
    const Session: any = {
      tutorId: this.selectedTutor,
      studentId: user.id,
      time: this.sessionTime,
      
    };
    this.userService.saveSession(Session).subscribe((val)=>{
      alert("success")
      console.log("success");
    })
  }

 

}
