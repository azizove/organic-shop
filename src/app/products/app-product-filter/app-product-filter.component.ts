import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppCategoryService } from '../../app-category.service';

@Component({
  selector: 'app-app-product-filter',
  templateUrl: './app-product-filter.component.html',
  styleUrls: ['./app-product-filter.component.css']
})
export class AppProductFilterComponent implements OnInit {

  categories$: Observable<any[]>
  @Input('category') category

  constructor(private categoryService: AppCategoryService) {

    this.categories$ = this.categoryService.getAll()
  }

  ngOnInit() {
  }

}
