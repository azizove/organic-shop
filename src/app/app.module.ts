import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { DataTableModule } from 'angular5-data-table';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppShoppingCartComponent } from './app-shopping-cart/app-shopping-cart.component';
import { environment } from '../environments/environment';
import { AppProductsComponent } from './app-products/app-products.component';
import { AppCheckOutComponent } from './app-check-out/app-check-out.component';
import { AppOrderSuccessComponent } from './app-order-success/app-order-success.component';
import { AppMyOrdersComponent } from './app-my-orders/app-my-orders.component';
import { AppAdminProductsComponent } from './admin/app-admin-products/app-admin-products.component';
import { AppAdminOrdersComponent } from './admin/app-admin-orders/app-admin-orders.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppLoginService } from './app-login.service';
import { AppAuthGardService } from './app-auth-gard.service';
import { AppUserService } from './app-user.service';
import { AppAdminAuthGuardService } from './app-admin-auth-guard.service';
import { AppProductFormComponent } from './admin/app-product-form/app-product-form.component';
import { AppCategoryService } from './app-category.service';
import { AppProductService } from './app-product.service';
import { AppProductFilterComponent } from './products/app-product-filter/app-product-filter.component';
import { AppProductCardComponent } from './app-product-card/app-product-card.component';
import { AppShoppingCartService } from './app-shopping-cart.service';
import { AppProductQuantityComponent } from './app-product-quantity/app-product-quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHomeComponent,
    AppShoppingCartComponent,
    AppProductsComponent,
    AppCheckOutComponent,
    AppOrderSuccessComponent,
    AppMyOrdersComponent,
    AppAdminProductsComponent,
    AppAdminOrdersComponent,
    AppLoginComponent,
    AppProductFormComponent,
    AppProductFilterComponent,
    AppProductCardComponent,
    AppProductQuantityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: AppProductsComponent },
        { path: 'home', component: AppProductsComponent },
        { path: 'products', component: AppProductsComponent },
        { path: 'login', component: AppLoginComponent },

        { path: 'my/orders', component: AppMyOrdersComponent, canActivate: [AppAuthGardService] },
        { path: 'shopping-cart', component: AppShoppingCartComponent, canActivate: [AppAuthGardService] },
        { path: 'check-out', component: AppCheckOutComponent, canActivate: [AppAuthGardService] },
        { path: 'order-success', component: AppOrderSuccessComponent, canActivate: [AppAuthGardService] },

        {
          path: 'admin/products/new',
          component: AppProductFormComponent,
          canActivate: [AppAuthGardService, AppAdminAuthGuardService]
        },
        {
          path: 'admin/products/:id',
          component: AppProductFormComponent,
          canActivate: [AppAuthGardService, AppAdminAuthGuardService]
        },
        {
          path: 'admin/products',
          component: AppAdminProductsComponent,
          canActivate: [AppAuthGardService, AppAdminAuthGuardService]
        },
        {
          path: 'admin/orders',
          component: AppAdminOrdersComponent,
          canActivate: [AppAuthGardService, AppAdminAuthGuardService]
        },
        { path: '**', component: AppHomeComponent }
      ],
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AppLoginService,
    AppUserService,
    AppCategoryService,
    AppProductService,
    AppAuthGardService,
    AppAdminAuthGuardService,
    AppShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
