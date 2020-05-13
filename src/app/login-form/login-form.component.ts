import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ShowBlogsComponent } from '../showblogs/showblogs.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private http:HttpClient,private cookieService:CookieService) { }

  ngOnInit(): void {
  }
  user = new User('','','','')

  submitted = false;
  error = null;
  private login_info : string;
  private current_user : string;
  location: Location;

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  get diagnostic() { return JSON.stringify(this.user); }

 

    httpOptionsWithOutAuth = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json'})};


  showConfig(user:User) {

    let httpOptionsWithAuth = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic'+ btoa(user.userName + ":" + user.password)
      })};



    this.http.get<User>('/SmartBloggers/rest/users/'+user.userName,httpOptionsWithAuth)
    .subscribe(responseData =>{
      let login_info : string
      let current_user : string;
      console.log(responseData);
      console.log("Login successfull");
      localStorage.setItem(login_info,JSON.stringify(responseData));
      localStorage.setItem(current_user,responseData.userName);
      console.log(login_info);
      console.log(current_user);
      console.log(this.location);


    },error =>{
      this.error = error.message;
      console.log(error);
    } );
    
}

onHandleError(){
  this.error = null;
}
}
