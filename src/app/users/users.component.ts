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

  users:User[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
getUsers(){
  this.http.get<any>('/SmartBloggers/rest/users')
  .pipe(
    map(response => response.data),
    tap(users => console.log("users array", users))
  )
  .subscribe( users => this.users = users);
    console.log("in users.ts");
  }
}
