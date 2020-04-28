import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private configService : ConfigService) { }

  ngOnInit(): void {
  }
  user = new User('','')

  submitted = false;

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  get diagnostic() { return JSON.stringify(this.user); }

  showConfig(user:User) {
    this.configService.getConfig(this.user)
      .subscribe( res => {
        console.log(res)});;

  
}
}
