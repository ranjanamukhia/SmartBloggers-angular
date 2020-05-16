import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ShowBlogsComponent } from '../showblogs/showblogs.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  isLoggedIn: boolean = false; 
  


  constructor(private http:HttpClient,private cookieService:CookieService,private location:Location,private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  user = new User('','','','')

  submitted = false;
  error = null;
  private login_info : string;
  private current_user : string;
  authObs: Observable<User>;
  isLoading = false;
  

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  get diagnostic() { return JSON.stringify(this.user); }


  showConfig(user:User) {

    console.log(user);
    console.log("user in login-form-component");
    this.isLoading = true;
    this.authObs = this.authService.login(user);
    this.authObs.subscribe(
      data => {
        console.log("login Successfull");
     this.router.navigate(['showblogs']);
      }
    ),
    errorMessage => {
      console.log(errorMessage);
      console.log("errormessage");
      this.error = errorMessage;
      this.isLoading = false;
    }
    
}

onHandleError(){
  this.error = null;
}
}
