import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  user = new User('','','','','')

  submitted = false;

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  get diagnostic() { return JSON.stringify(this.user); }

  showConfig(user:User) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', user.userName);
    params.set('password', user.password);

    

    this.http.get<User>('https://smartbloggers-7101f.firebaseio.com/users.json')
    .subscribe(responseData =>{
      console.log(responseData);
    } );
   

  
}
}
