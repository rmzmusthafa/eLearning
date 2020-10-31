import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TutorHomeComponent } from './tutor-home/tutor-home.component';

import { AuthGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';



const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'studentSignup',component:StudentSignupComponent},
{path:'studentLogin',component:StudentLoginComponent},
{path:'tutor',component:TutorHomeComponent,canActivate:[AuthGuard]},
{path:'student',component:StudentComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
