import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = new User('','','','')
  loadedUsers:User[] =[]
  isgettingUsers = false;
  error = null;
  
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  showUsers(){
    this.isgettingUsers = true;
    let httpOptionsWithAuth = {
      headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Basic '+ localStorage.getItem('login_info')
    })}

    this.http.get<{[key:string] : User}>('/SmartBloggers/rest/users',httpOptionsWithAuth)
    .pipe(
      map(responseData =>{
        const userArray: User[]=[];
        for (const key in responseData){
          if(responseData.hasOwnProperty(key)){
            userArray.push({...responseData[key], emailId : key});
          }
        }
        return userArray;
      })
    ).subscribe(users=>{
      this.isgettingUsers = false;
      this.loadedUsers = users
      console.log(users);
    },error =>{
      this.isgettingUsers = false;
      this.error = error.message;
      console.log(error);
    });
  
}

onHandleError(){
  this.error = null;
}
}
