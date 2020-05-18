import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject, BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



export interface AuthResponseData{
  userName :string,
  fullName :string,
  emailId : string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserEmitter = new Subject<boolean>();
  
  error = null;

  constructor(private http: HttpClient,
              private cookieService:CookieService,
              private router: Router)
               {
                
               }

  httpOptionsWithOutAuth = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json'})};
  
  
  register(user:User){
    console.log(user);
    console.log("user in service");
    return this.http.post<User>('/SmartBloggers/rest/users/',user,this.httpOptionsWithOutAuth)
    
  }

  login(user:User){    
    let httpOptionsWithAuth = {
        headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic'+ btoa(user.userName + ":" + user.password)
      })};
     return this.http.get<User>('/SmartBloggers/rest/users/'+user.userName,httpOptionsWithAuth)
      .pipe(map(user => {
       

     
       // localStorage.setItem('current_user',user.userName );
      
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('current_user');
    localStorage.removeItem('login_info');
  }
}
