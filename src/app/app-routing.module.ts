import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UsersComponent } from './users/users.component';
import { ShowBlogsComponent } from './showblogs/showblogs.component';
import { AddblogComponent } from './addblog/addblog.component';
import { AuthGuardService } from './auth.guard.service'
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  // { path: 'register', component: RegisterFormComponent },
  // { path: 'login', component: LoginFormComponent },
  // { path : 'showblogs', component: ShowBlogsComponent}, 
  // { path: 'users', component: UsersComponent },
  // { path : 'blog', component: AddblogComponent},

  // { path: '', component: LoginFormComponent },

//   { path: '', component: LoginFormComponent, canActivate: [AuthGuardService] },
//   { path: 'login', component: LoginFormComponent,children:[
//     { path : 'showblogs', component: ShowBlogsComponent}, 
//     { path: 'users', component: UsersComponent },
//     { path : 'blog', component: AddblogComponent},

//   ] },
//   { path: 'register', component: RegisterFormComponent },
  


//   // otherwise redirect to home
//   { path: '**', redirectTo: '' }
// ];


{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
   { path: 'register', component: RegisterFormComponent },
    { path: 'showblogs', component: ShowBlogsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'blog', component: AddblogComponent },
    { path: 'logout', component: LogoutComponent },

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }