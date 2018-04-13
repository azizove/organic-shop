import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShoppingCartComponent } from './app-shopping-cart.component';

describe('AppShoppingCartComponent', () => {
  let component: AppShoppingCartComponent;
  let fixture: ComponentFixture<AppShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
