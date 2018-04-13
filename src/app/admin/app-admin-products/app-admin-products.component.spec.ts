import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminProductsComponent } from './app-admin-products.component';

describe('AppAdminProductsComponent', () => {
  let component: AppAdminProductsComponent;
  let fixture: ComponentFixture<AppAdminProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
