import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoginService } from './app-login.service';
import { AppUserService } from './app-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: AppUserService,
    private authService: AppLoginService,
    router: Router) {
    let returnUrl = localStorage.getItem('returnUrl')
    authService.user$.subscribe(user => {
      if (user) {
        userService.save(user)
        if (returnUrl) {
          localStorage.removeItem('returnUrl')
          router.navigate([returnUrl])
        }
      }
    })
  }
}
