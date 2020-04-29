import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, tap} from 'rxjs/operators';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>('/SmartBloggers/rest/users/')
    .pipe(
      map(response => response.data),
      tap(users => console.log("users array", users))
    )
  }


}
