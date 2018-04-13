import { AppShoppingCartItem } from './app-shopping-cart-item';
import { AppProduct } from './app-product';

export class AppShoppingCart {

    items: AppShoppingCartItem[] = []
    constructor(public itemsMap: {[productId: string]: AppShoppingCartItem}) {
        for(let productId in itemsMap){
            let item = itemsMap[productId]
            this.items.push(new AppShoppingCartItem(item.product, item.quantity))
        }
    }

    get totalItemsCount() {
      let count = 0
      for(let productId in this.itemsMap) {
        count += this.itemsMap[productId].quantity
      }
      return count
    }

    get totalPrice() {
        let total = 0
      for(let productId in this.items) {
        total += this.items[productId].totalPrice
      }
      return total 
    }

    getQuantity(product: AppProduct) {
      let item = (this)? this.itemsMap[product.$key] : null
      return item? item.quantity : 0
    }

}