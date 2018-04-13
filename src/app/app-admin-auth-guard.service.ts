import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map'

import { AppLoginService } from './app-login.service';
import { AppUserService } from './app-user.service';

@Injectable()
export class AppAdminAuthGuardService implements CanActivate {

  constructor(private authService: AppLoginService,
    private appUser: AppUserService) { }

  canActivate() {
    return this.authService.appUser$
            .map(appUser => appUser.isAdmin)
  }

}
