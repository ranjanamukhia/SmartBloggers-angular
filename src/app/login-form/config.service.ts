import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
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
    let params = new HttpParams();
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${btoa(user.userName+':'+user.password)}`)
    }
    
    return this.http.get<any>('/SmartBloggers/rest/users/'+ user.userName,header);
}
}
