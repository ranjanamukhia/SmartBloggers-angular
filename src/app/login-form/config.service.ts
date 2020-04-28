import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { LoginFormComponent } from './login-form.component';
import { User } from '../user';





@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  
 
  getConfig(user:User): Observable<any> {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(user.username+':'+user.password)}`)
    }
    
    return this.http.get<any>('/SmartBloggers/users/'+user.username, header);
}
}
