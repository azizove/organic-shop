import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppShoppingCartService } from '../app-shopping-cart.service';
import { AppShoppingCart } from '../models/app-shopping-cart';

@Component({
  selector: 'app-app-shopping-cart',
  templateUrl: './app-shopping-cart.component.html',
  styleUrls: ['./app-shopping-cart.component.css']
})
export class AppShoppingCartComponent implements OnInit {

  cart$: Observable<AppShoppingCart>;
  constructor(
    private cartService: AppShoppingCartService) { }

  async ngOnInit() {    
    this.cart$ = await this.cartService.getCart()
  }

}
