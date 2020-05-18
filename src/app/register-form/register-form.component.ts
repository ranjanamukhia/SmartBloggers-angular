import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService, AuthResponseData } from '../auth.service';




@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user = new User('','','','','')
  users : User[]
  error = null;
  isLoading = false;
  authObs: Observable<User>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  
  

  register(user:User){
    console.log(user);
    console.log("user in register-form-component");
    this.authObs = this.authService.register(user);
    this.authObs.subscribe(
      resData => {
        this.isLoading = false;
        console.log("Regsiter Succeessfull");
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
      console.log(this.error);
    }


  
  
}
