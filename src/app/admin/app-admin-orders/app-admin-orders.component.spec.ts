import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminOrdersComponent } from './app-admin-orders.component';

describe('AppAdminOrdersComponent', () => {
  let component: AppAdminOrdersComponent;
  let fixture: ComponentFixture<AppAdminOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
