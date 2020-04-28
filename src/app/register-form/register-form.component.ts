import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegsiterService } from './regsiter.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user = new User('','','','')

  constructor(private regsiterService : RegsiterService) { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    
    this.submitted = true; 
    console.log(this.user);

  }

  get diagnostic() { return JSON.stringify(this.user); }

  register(user:User) {
    this.regsiterService.regsiter(this.user)
      .subscribe( res => {
        console.log(res)});;

}
}
