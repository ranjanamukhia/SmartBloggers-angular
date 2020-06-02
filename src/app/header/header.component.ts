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

  
  constructor( private loginFormComponent: LoginFormComponent,private authService:AuthService) {}
  
  

  ngOnInit(){
 
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
     this.currentUser = true;
     this.actualCurrentUser = localStorage.getItem('currentuser');
     
     console.log("the actual Current user in header " +this.actualCurrentUser);

    });
   
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();  
    this.currentUser = false;
    console.log(" localStorage.getItem('current_user') value inside header's ngdestroy"+ localStorage.getItem('current_user'))
  }

  onLogout(){
    
    
    this.isAuth = false;
    this.currentUser = false;
    this.authService.logout();
    this.actualCurrentUser = null;
    localStorage.removeItem('current_user');
    console.log("logout successfull");
    console.log(" localStorage.getItem('current_user') value after logout "+ localStorage.getItem('current_user'))
    console.log("isAuth value in logout in heaer comp. "+ this.isAuth+"currentUser after logout in header comp. "+this.currentUser+" "+this.actualCurrentUser);
  }
}
