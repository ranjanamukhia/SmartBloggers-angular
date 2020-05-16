import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartBloggers';

  email: string;
  password: string;



  currentUser: string;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
       this.currentUser = this.authService.currentUser;
        console.log(this.authService.currentUser+"current_user in app component")
    }

  
}
