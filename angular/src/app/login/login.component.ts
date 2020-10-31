import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  loginForm: FormGroup;

  constructor( private formbuilder: FormBuilder,private authService :AuthServiceService ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {  email: ["", [Validators.required, Validators.email]],        
        password: ["", [Validators.required, Validators.minLength(6)]]    
      }
    );
  }

  get h() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // console.table(this.registerForm.value);
    // console.table(this.registerForm);
    console.log(this.loginForm.value);

    this.authService.sigin(this.loginForm.value);

  }

}
