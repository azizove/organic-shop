import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOrderSuccessComponent } from './app-order-success.component';

describe('AppOrderSuccessComponent', () => {
  let component: AppOrderSuccessComponent;
  let fixture: ComponentFixture<AppOrderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOrderSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
