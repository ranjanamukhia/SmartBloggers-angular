import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './users/users.component';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ShowBlogsComponent } from './showblogs/showblogs.component';
import { AddblogComponent } from './addblog/addblog.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UsersComponent,
    LoadingSpinnerComponent,
    ShowBlogsComponent,
    AddblogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
   
   
  ],
  providers:[ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
