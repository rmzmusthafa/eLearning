import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url ='http://localhost:8080/auth';

  constructor(private http: HttpClient ,private router: Router) { }

  public signup(data){
    return this.http.post<any>(this.url+"/registerTutor",data);
  }

  public loggedin(){
    console.log(sessionStorage.getItem('message'))
    return !!sessionStorage.getItem('message')
  }

  public sigin(data){
    return this.http.post<any>(this.url+"/loginTutor",data).subscribe((val) => {
      console.log("POST call successful value returned in body", 
                  val);
               
                  let tokenStr= 'Bearer '+val.accessToken;
                  sessionStorage.setItem('message', val.message);
                  console.log("tok"+sessionStorage.getItem('message'))
                  sessionStorage.setItem("userId",val.userId)
                   if(val.roleId==1){
                     console.log("tok11"+sessionStorage.getItem('userId'))
                     this.loggedin();
                     this.router.navigate(['/tutor']);
                     }else{
                      console.log("tok11"+sessionStorage.getItem('userId'))
                      this.loggedin();
                      this.router.navigate(['/student']);
                     }
                     alert("Success");

                  return val;


  },
  response => {
      if(response.status!=200){
        console.log("failure");
      }
              
  },
  () => {
      console.log("The POST observable is now completed.");
  }
  
  );
  }

  public siginForStudent(data){
    return this.http.post<any>(this.url+"/loginStudent",data).subscribe((val) => {
      console.log("POST call successful value returned in body", 
                  val);
               
                  let tokenStr= 'Bearer '+val.accessToken;
                  sessionStorage.setItem('message', val.message);
                  console.log("tok"+sessionStorage.getItem('message'))
                  sessionStorage.setItem("userId",val.userId)
                   if(val.roleId==1){
                     console.log("tok11"+sessionStorage.getItem('userId'))
                     this.loggedin();
                     this.router.navigate(['/tutor']);
                     }else{
                      console.log("tok11"+sessionStorage.getItem('userId'))
                      this.loggedin();
                      this.router.navigate(['/student']);
                     }
                     alert("success");
                  return val;


  },
  response => {
      if(response.status!=200){
        console.log("failure");
      }
              
  },
  () => {
      console.log("The POST observable is now completed.");
  }
  
  );
  }

  public signupForStudent(data){
    return this.http.post<any>(this.url+"/registerStudent",data);
  }


}


