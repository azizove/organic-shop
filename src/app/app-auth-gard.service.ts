import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AppLoginService } from './app-login.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AppAuthGardService implements CanActivate {

  constructor(private authService: AppLoginService,
              private router: Router,) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.user$
      .map(user => {
        if(user) return true;

        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}})
        return false
      })
  }

}
