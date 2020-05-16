import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(
    private router: Router,
        private authService: AuthService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.cookieValue_current_user;
    if (currentUser) {
        // logged in so return true
        return true;
    }

    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
  }
}
