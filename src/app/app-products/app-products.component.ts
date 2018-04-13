import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { AppProduct } from '../models/app-product';
import { AppProductService } from '../app-product.service';
import { AppShoppingCartService } from '../app-shopping-cart.service';
import { AppShoppingCart } from './../models/app-shopping-cart';

@Component({
  selector: 'app-app-products',
  templateUrl: './app-products.component.html',
  styleUrls: ['./app-products.component.css']
})
export class AppProductsComponent implements OnInit, OnDestroy {

  cart: AppShoppingCart;
  category: string;
  filteredProducts: AppProduct[] = [];
  products: AppProduct[] = [];
  subscription:  Subscription

  
  constructor(
    private cartService: AppShoppingCartService,
    private router: ActivatedRoute,
    private productService: AppProductService) {

    this.productService.getAll()
    .switchMap(products => {
        this.products = products
        return this.router.queryParamMap 
      })
      .subscribe(params => {
        this.category = params.get('category')
        this.filteredProducts = (this.category) ? 
                                  this.products.filter(product => product.category === this.category)
                                : this.products
      })

    
      
  }

  async ngOnInit() {
    this.subscription = (await this.cartService.getCart())
                              .subscribe(cart => {
                                this.cart = cart})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
