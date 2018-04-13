import { Component, OnInit, Input } from '@angular/core';
import { AppProduct } from '../models/app-product';
import { AppShoppingCart } from '../models/app-shopping-cart';
import { AppShoppingCartService } from '../app-shopping-cart.service';

@Component({
  selector: 'app-app-product-quantity',
  templateUrl: './app-product-quantity.component.html',
  styleUrls: ['./app-product-quantity.component.css']
})
export class AppProductQuantityComponent implements OnInit {

  @Input('product') product: AppProduct
  @Input('shoppingCart') shoppingCart

  constructor(private cartService: AppShoppingCartService) { 
  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product)
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

}
