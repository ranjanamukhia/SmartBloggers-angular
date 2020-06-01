import { Component,OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { Subscription } from 'rxjs';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy{
  title = 'SmartBloggers';

  email: string;
  password: string;

  currentUser: string;
  

    constructor(
        private router: Router,
        private authService: AuthService
       
    ) {
        // loginFormComponent.loginEvent.emit(false);
        // this.currentUser = localStorage.getItem('current_user');
        // localStorage.removeItem('current_user');
        // localStorage.removeItem('login_info');
      }  

      ngOnInit(){
        
        
        
        

      }

      ngOnDestroy(){


      }
}
