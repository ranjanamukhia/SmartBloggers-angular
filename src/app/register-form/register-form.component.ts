import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegsiterService } from './regsiter.service';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user = new User('','','','')
  users : User[]
  

  constructor(private registerService : RegsiterService) { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  get diagnostic() { return JSON.stringify(this.user); }

  register(user:User){

    this.registerService.register(this.user).subscribe(user =>this.users.push(user))

  }

  
  
    


  
  
}
