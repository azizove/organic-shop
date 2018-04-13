import { Component, OnInit, Input } from '@angular/core';
import { AppShoppingCartService } from '../app-shopping-cart.service';
import { AppProduct } from '../models/app-product';
import { AppShoppingCart } from '../models/app-shopping-cart';

@Component({
  selector: 'app-app-product-card',
  templateUrl: './app-product-card.component.html',
  styleUrls: ['./app-product-card.component.css']
})
export class AppProductCardComponent implements OnInit {

  @Input('product') product: AppProduct
  @Input('showActions') showActions = true
  @Input('shoppingCart') shoppingCart: AppShoppingCart

  constructor(private cartService: AppShoppingCartService) { 
    console.log('cart', this.shoppingCart)
  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product)
  }
}
