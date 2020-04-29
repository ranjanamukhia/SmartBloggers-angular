import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { RegisterFormComponent } from './register-form.component';
import { User } from '../user';
import { UsersService } from '../users.service';





@Injectable({
  providedIn: 'root'
})
export class RegsiterService {
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  register(user:User):Observable<User> {
    return this.http.post<User>('/SmartBloggers/rest/users',user,this.httpOptions)
  }
  
}

