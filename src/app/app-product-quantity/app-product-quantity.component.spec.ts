import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductQuantityComponent } from './app-product-quantity.component';

describe('AppProductQuantityComponent', () => {
  let component: AppProductQuantityComponent;
  let fixture: ComponentFixture<AppProductQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
