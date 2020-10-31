import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService :AuthServiceService, private router : Router){}
   
  canActivate(): boolean {
      console.log(this.authService.loggedin())
      if(this.authService.loggedin()){
        return true;
      }else{
        this.router.navigate(['/']);
        return false;
      }
  }
  
}
