import { Component, OnInit,Input } from '@angular/core';

import { Subscription } from 'rxjs';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: boolean;
  
  constructor( private loginFormComponent: LoginFormComponent,private authService:AuthService) {


    
    // if (localStorage.getItem('current_user') != "null") {
    //   this.currentUser=localStorage.getItem('current_user');
    // }
    

    // console.log(this.currentUser+" current user in header constructor");

  //loginFormComponent.loginEvent.subscribe(this.setCurrentUser)


  }

  ngOnInit(){
   
  }

  setCurrentUser(){
    this.authService.currentUserEmitter.next(true);
    console.log("inside setCurrentUser()");
   
    
    
  }
}
