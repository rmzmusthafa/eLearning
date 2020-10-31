import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  signupForStudent(){
    this.router.navigate(['/studentSignup']);
  }

  loginForStudent(){
    this.router.navigate(['/studentLogin']);
  }

  
}
 