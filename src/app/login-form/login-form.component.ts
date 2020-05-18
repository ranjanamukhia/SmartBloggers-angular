import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../user';

import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ShowBlogsComponent } from '../showblogs/showblogs.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  implements OnDestroy {
  
  isLoggedIn: boolean = false;
 // @Output() loginEvent = new EventEmitter();
  
  constructor(private http:HttpClient,
    private cookieService:CookieService,
    private location:Location,
    private router: Router,
    private authService: AuthService) { 
     
    }

  user = new User('','','','','')

  submitted = false;
  error = null;
  private login_info : string;
  private currentUser : string;
  authObs: Observable<User>;
 

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  logout(user:User) {
   // this.loginEvent.emit(false);
    this.authService.logout();
  }


  login(user:User) {

    console.log(user);
    console.log("user in login-form-component");
    localStorage.setItem('current_user',user.userName );
    this.authObs = this.authService.login(user);
    this.authObs.subscribe(
      data => {
       // this.loginEvent.emit(true);
        console.log("login Successfull");
        let loginEvent = false;
        let activatedSub: Subscription;
        activatedSub = this.authService.currentUserEmitter.subscribe(didActivate => {
          loginEvent = didActivate
          console.log(loginEvent + " value of loginEvent after activated sub in logincomponenet"); })
          console.log(activatedSub+" value of activatedsubinside data => in login in loginform component");
        
          
        localStorage.setItem('login_info', btoa(user.userName + ":" + user.password));
        //localStorage.setItem('current_user',user.userName );
     this.router.navigate(['showblogs']);
      }
    ),
    errorMessage => {
      console.log(errorMessage);
      console.log("errormessage");
      this.error = errorMessage;
      
    }
    
}

onHandleError(){
  this.error = null;
}

ngOnInit(){
  
        // this.activatedSub = this.authService.currentUserEmitter.subscribe(didActivate => {
        //   this.loginEvent = didActivate })
        //   console.log("inside ngOninit in loginform component");
        //   console.log(this.loginEvent + " value of loginEvent after activated sub in logincomponenet");
}

ngOnDestroy(){
  
}
}
