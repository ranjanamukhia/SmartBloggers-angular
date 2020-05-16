import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
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

  user =new Subject<User>();
  isLoginMode = true;
  cookieValue_login_info: string;
  cookieValue_current_user: string;
  isLoading = false;
  //currentUserSubject: BehaviorSubject<User>;
  public currentUser: string;
  error = null;

  constructor(private http: HttpClient,
              private cookieService:CookieService,
              private router: Router)
               {
                
                this.currentUser = this.cookieService.get('current_user');
               }

  httpOptionsWithOutAuth = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json'})};
  
  
  register(user:User){
    console.log(user);
    console.log("user in service");
    return this.http.post<User>('/SmartBloggers/rest/users/',user,this.httpOptionsWithOutAuth)
    
  }

  login(user:User){
    this.isLoginMode = true

    let httpOptionsWithAuth = {
        headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic'+ btoa(user.userName + ":" + user.password)
      })};
     return this.http.get<User>('/SmartBloggers/rest/users/'+user.userName,httpOptionsWithAuth)
      .pipe(map(user => {
        this.isLoading = false;
        this.cookieService.set('login_info',JSON.stringify(user));
        this.cookieService.set('current_user',user.userName);
        this.cookieValue_login_info = this.cookieService.get('login_info');
        this.cookieValue_current_user = this.cookieService.get('current_user');
        // this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.cookieService.delete('current_user');
    this.cookieValue_current_user = null;
}
}
