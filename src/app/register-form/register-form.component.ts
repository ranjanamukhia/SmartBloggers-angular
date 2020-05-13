import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user = new User('','','','')
  users : User[]
  error = null;
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  httpOptionsWithAuth = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic dW46dW4='
    })};

    httpOptionsWithOutAuth = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json','Accept': 'application/json'})};


  register(user:User){
    console.log(user);
    this.http.post<User>('/SmartBloggers/rest/users/',user,this.httpOptionsWithOutAuth)
    .subscribe(responseData =>{
      console.log(responseData);
    },error =>{
     
      this.error = error.message;
      console.log(error);
    });

  }

  onHandleError(){
    this.error = null;
  }
  
    


  
  
}
