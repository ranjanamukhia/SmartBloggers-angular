import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  private userSub : Subscription ;
  constructor(private authService : AuthService) { }


  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !user ? false : true;//or !!user
      console.log(!user);
      console.log(!!user);
    }
);
  }

  ngOnDestroy():void{
    this.userSub.unsubscribe();
  }

  

}
