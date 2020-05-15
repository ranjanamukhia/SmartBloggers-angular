import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsersComponent } from './users/users.component';
import { ShowBlogsComponent } from './showblogs/showblogs.component';
import { AddblogComponent } from './addblog/addblog.component';



const routes: Routes = [
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path : 'showblogs', component: ShowBlogsComponent}, 
  { path: 'users', component: UsersComponent },
  { path : 'blog', component: AddblogComponent},

  { path: '', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }