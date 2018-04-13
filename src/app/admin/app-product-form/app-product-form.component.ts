import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

import { AppCategoryService } from '../../app-category.service';
import { AppProductService } from './../../app-product.service';

@Component({
  selector: 'app-app-product-form',
  templateUrl: './app-product-form.component.html',
  styleUrls: ['./app-product-form.component.css']
})
export class AppProductFormComponent implements OnInit {

  categories$
  product = {}
  productId
  constructor(private router: Router,
    private route: ActivatedRoute,
    private categoryService: AppCategoryService,
    private productService: AppProductService) {

    this.categories$ = categoryService.getAll()

    this.productId = route.snapshot.paramMap.get('id')
    if (this.productId) this.productService.get(this.productId).take(1)
      .subscribe(product => {
        this.product = product
      })
  }

  ngOnInit() {
  }

  save(product) {

    (this.productId) ? 
      this.productService.update(this.productId, product) 
      : this.productService.create(product)

    this.router.navigate(['/admin/products'])
  }

  delete(productId) {
    
    if(!confirm("Are you sure about deleting this product")) return

    this.productService.delete(this.productId)
    this.router.navigate(['/admin/products'])

  }

}
