import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { AppProduct } from './models/app-product';
import { AppShoppingCart } from './models/app-shopping-cart';

@Injectable()
export class AppShoppingCartService {

  
  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }


  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId')

    if (cartId) return cartId

    let result = await this.create()
    localStorage.setItem('cartId', result.key)
    return result.key
  }

  private async updateItemQuantity(product: AppProduct, change: number) {
    let cartId = await this.getOrCreateCartId()
    let item$ = this.getItem(cartId, product.$key)
    item$.take(1)
      .subscribe(item => {
        item$.update({product: product, quantity: (item.quantity || 0) + change})
      })
  }
  private getItem(cartId, productId) {
    return this.db.object('/shopping-carts/'+cartId+'/items/'+productId)
  }

  async getCart(): Promise<Observable<AppShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+cartId).map(cart => new AppShoppingCart(cart.items))
  }

  async addToCart(product: AppProduct) {
    this.updateItemQuantity(product, 1)
  }

  async removeFromCart(product: AppProduct) {
    this.updateItemQuantity(product, -1)
  }

}
