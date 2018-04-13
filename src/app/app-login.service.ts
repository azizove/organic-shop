import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppUser } from './models/app-user';
import { AppUserService } from './app-user.service';

@Injectable()
export class AppLoginService {

  user$: Observable<firebase.User>;

  constructor(private appUserService: AppUserService,
              private afAuth: AngularFireAuth, 
              private route: ActivatedRoute,
              private router: Router) {

      this.user$ = this.afAuth.authState
  }

  get appUser$(): Observable<AppUser> {
    return this.user$
            .switchMap(user => {
              if(user) return this.appUserService.get(user.uid)
              return Observable.of(null)
            })
  }

  logInWithGoogle() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl', returnUrl)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}

