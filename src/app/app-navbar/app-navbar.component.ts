import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

import { AppLoginService } from '../app-login.service';
import { AppShoppingCartService } from '../app-shopping-cart.service';


import { AppUser } from '../models/app-user';
import { AppShoppingCart } from '../models/app-shopping-cart';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  cart$: Observable<AppShoppingCart>;
  appUser : AppUser
  constructor(
    private cartService: AppShoppingCartService,
    private authService: AppLoginService) { 
    
  }

  async ngOnInit() {
    this.authService.appUser$
      .subscribe(appUser => this.appUser = appUser )
    this.cart$ = await this.cartService.getCart()
  }

  logout() {
    this.authService.logout()
  }
}
