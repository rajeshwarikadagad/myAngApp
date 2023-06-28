import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {
  hasAccess: string | null = '';
  user: string | null = '';

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, ): boolean | void {
    const checkAccess = this.checkAccess(route);
    return checkAccess;
  }
  checkAccess(route: ActivatedRouteSnapshot) {
    this.hasAccess = window.sessionStorage.getItem('accessToken');
    this.user = window.sessionStorage.getItem('users');
    console.log('route', route);
    if (this.hasAccess) {

      switch (route.routeConfig?.path) {
        case 'login':
          window.sessionStorage.clear();
          AppComponent.isUserLoggedIn = false;
          return true;
        case 'home':
          AppComponent.isUserLoggedIn = true;
          return true;
        case 'user':
          AppComponent.isUserLoggedIn = true;
          return true;
        case 'resources':
          AppComponent.isUserLoggedIn = true;
          return true;
        default: return false;
      }
    }
    else {
      this.router.navigate(["/"]);
      return false
    }
  }
}
