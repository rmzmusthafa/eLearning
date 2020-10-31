import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PasswordChecker } from '../Custom-validator/passwordchecker';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  success;
  message="";

  constructor( private formbuilder: FormBuilder,private apid: AuthServiceService ,private http:HttpClient,
    private router:Router ) {  }

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        mobile:["",[Validators.required,Validators.maxLength(10)]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        roleId:1,
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
    this.apid.signup(this.registerForm.value).subscribe((data)=>{  
      this.success=data.success;
      this.message=data.message;
      console.log(data.message);
      console.log(data.success)});
    // alert("Success Signup\n" + JSON.stringify(this.registerForm.value));
    alert("success");
    this.router.navigate(['/login']);
     
      

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
