import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ='http://localhost:8080/user';

  constructor(private http: HttpClient ) { }

  getAllStudents(){
    return this.http.get(this.url + '/listAllStudent');
  }

  getAllTutors(){
    return this.http.get(this.url + '/listAllTutor');
  }


  saveSession(data){
      return this.http.post<any>(this.url+"/scheduleSession",data);
    }
  
  listAllSessionForStuddent(id:number){
    return this.http.get(this.url+"/listSessionForStudent/"+id);
  }

  listAllSessionForTutor(id:number){
    return this.http.get(this.url+"/listSessionForTutor/"+id);
  }

}
