import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAugthGuard implements CanActivate {
  constructor(public auth: LoginService, public router: Router) {}
  canActivate(): boolean {
    const account = JSON.parse(localStorage.getItem('account') as string);
    if (account !== null) {
      this.router.navigate(['client/home']);
      return false;
    }

    return true;
  }
}
