import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { RegisterFormComponent } from './register-form.component';
import { User } from '../user';





@Injectable({
  providedIn: 'root'
})
export class RegsiterService {
  constructor(private http: HttpClient) { }

  
 
  regsiter(user:User): Observable<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(user.userName+':'+user.password)}`)
    }
    
    return this.http.post<any>('/SmartBloggers/rest/users/'+user.userName, header);
}
}
