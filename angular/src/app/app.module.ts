import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HerComponent } from './her/her.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './service/auth-service.service';
import { TutorHomeComponent } from './tutor-home/tutor-home.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SessionComponent } from './session/session.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { NComponent } from './n/n.component';
import { ScheduleTutorComponent } from './schedule-tutor/schedule-tutor.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    HerComponent,
    LoginComponent,
    SignupComponent,
    TutorHomeComponent,
    StudentComponent,
    StudentListComponent,
    SessionComponent,
    StudentLoginComponent,
    StudentSignupComponent,
    NComponent,
    ScheduleTutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
