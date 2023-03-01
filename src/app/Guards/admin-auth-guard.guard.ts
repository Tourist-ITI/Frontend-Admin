import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLogInService } from '../Services/auth/admin-log-in.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardGuard implements CanActivate {

  logInStatus = this.loginService.checkLogin();



  constructor(private loginService: AdminLogInService, private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.loginService.isAuth || this.logInStatus) {
      return true;
    }

    this.route.navigate(['/logIn']);
    return false;
  }





}
