import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginFormComponent } from './login-form/login-form.component';
import { User } from './user';
import { encode } from 'punycode';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

 

getConfig(user: User) {

  let loginUrl = '';
  
  return this.http.get(loginUrl,authHeaderValue);
}
}
