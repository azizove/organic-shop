import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyOrdersComponent } from './app-my-orders.component';

describe('AppMyOrdersComponent', () => {
  let component: AppMyOrdersComponent;
  let fixture: ComponentFixture<AppMyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
