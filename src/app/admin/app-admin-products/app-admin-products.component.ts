import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppProductService } from '../../app-product.service';
import { AppProduct } from './../../models/app-product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-app-admin-products',
  templateUrl: './app-admin-products.component.html',
  styleUrls: ['./app-admin-products.component.css']
})
export class AppAdminProductsComponent implements OnInit, OnDestroy {

  itemCount: number;
  items: AppProduct[] = [];
  products: AppProduct[]
  subscription: Subscription
  dataTableSource: DataTableResource<AppProduct>

  constructor(private productsService: AppProductService) {

    //this.products = 
    this.subscription = productsService.getAll().subscribe(products => {

      this.products = products
      this.initializeTable(this.products);

    })
  }

  private initializeTable(data) {

    this.dataTableSource = new DataTableResource(data)
    this.dataTableSource.query({ offset: 0 })
      .then(items => this.items = items)
    this.dataTableSource.count()
      .then(count => this.itemCount = count)
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  ngOnInit() {
  }

  reloadItems(params) {
    if(this.dataTableSource)
      this.dataTableSource.query(params)
        .then(items => this.items = items)
  }

  filter(query: string) {
    let filteredProducts = (query) ?
      this.products.filter(product => product.title.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()))
      : this.products
    this.initializeTable(filteredProducts)
  }


}
