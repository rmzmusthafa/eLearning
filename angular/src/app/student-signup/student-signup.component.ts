import { Component, OnInit } from '@angular/core';
import { PasswordChecker } from '../Custom-validator/passwordchecker';
import { AuthServiceService } from '../service/auth-service.service';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  success;
  message;

  constructor( private formbuilder: FormBuilder,private apid: AuthServiceService ,private http:HttpClient,private router :Router ) {  }

 
  ngOnInit(): void {
    this.registerForm = this.formbuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        mobile:["",[Validators.required,Validators.maxLength(10)]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        roleId:2,
        acceptTandC: [false, Validators.requiredTrue],
      },
      {
        validators: PasswordChecker("password", "confirmPassword"),
      }
    );

  }

  get h() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    
    // console.table(this.registerForm.value);
    // console.table(this.registerForm);
    console.log(this.registerForm.value);
    this.apid.signupForStudent(this.registerForm.value).subscribe((val)=>{  
      this.success=val.success
      this.message=val.message;
      console.log(val.message);
      console.log(val.success)});

    alert("success");
    this.router.navigate(['/studentLogin']);


  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
