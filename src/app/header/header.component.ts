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
  actualCurrentUser: string
  isAuth = false;
  authSubscription: Subscription;

  
  constructor( private loginFormComponent: LoginFormComponent,private authService:AuthService) {


    
    // if (localStorage.getItem('current_user') != "null") {
    //   this.currentUser=localStorage.getItem('current_user');
    // }
    

    // console.log(this.currentUser+" current user in header constructor");

  //loginFormComponent.loginEvent.subscribe(this.setCurrentUser)


  }

  ngOnInit(){
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
     this.currentUser = true;
     this.actualCurrentUser = localStorage.getItem('currentuser');
     console.log("the actual Current user in header " +this.actualCurrentUser)
    });
   
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();  
    this.currentUser = false;
  }

  onLogout(){
    
    
    this.isAuth = false;
    this.currentUser = false;
    this.authService.logout();
    console.log("logout successfull");
    console.log("isAuth"+ this.isAuth+"currentUser afte logout"+this.currentUser);
  }
}
