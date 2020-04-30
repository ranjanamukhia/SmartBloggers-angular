import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = new User('','','','','')
  loadedUsers:User[] =[]
  isgettingUsers = false;
  error = null;
  
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  showUsers(){
    this.isgettingUsers = true;

    this.http.get<{[key:string] : User}>('https://smartbloggers-7101f.firebaseio.com/users.json')
    .pipe(
      map(responseData =>{
        const userArray: User[]=[];
        for (const key in responseData){
          if(responseData.hasOwnProperty(key)){
            userArray.push({...responseData[key], id : key});
          }
        }
        return userArray;
      })
    ).subscribe(users=>{
      this.isgettingUsers = false;
      this.loadedUsers = users
      console.log(users);
    },error =>{
      this.error = error.message;
      console.log(error);
    });
  
}
}
