import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject, BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Blog } from './blog';





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
  currentUserIsSet = new Subject<User>();
  
  error = null;
  private isAuthenticated = false;
  authChange = new Subject<boolean>();
  private mongoSubs: Subscription[] =[];
  private currentUser: User;

  constructor(private http: HttpClient,
              private cookieService:CookieService,
              private router: Router)
               {
                
               }

  httpOptionsWithOutAuth = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json'})};
  
  getUsers(){

  }
  register(user:User){
    console.log(user);
    console.log("user in service");
    return this.http.post<User>('/SmartBloggers/rest/users/',user,this.httpOptionsWithOutAuth);
    this.authChange.next(true);
    
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
       
        console.log("user in AuthService "+user);
     
       // localStorage.setItem('current_user',user.userName );
       this.isAuthenticated = true;
       this.authChange.next(true);
      
       
        this.currentUser = user;
        this.currentUserIsSet.next({...this.currentUser});
        console.log("this.currentUser in authService "+this.currentUser)
        return user;
      }));
  }

  


  
  cancelSubscriptions(){
    this.mongoSubs.forEach(sub => sub.unsubscribe());
  }

  logout() {
    // remove user from local storage to log user out
    
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
    localStorage.removeItem('current_user');
    console.log(" localStorage.getItem('current_user') value inside authservice logout  "+ localStorage.getItem('current_user'))
    localStorage.removeItem('login_info');
   
  }

  isAuth() {
    return this.isAuthenticated;
  }

 
}
