import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCheckOutComponent } from './app-check-out.component';

describe('AppCheckOutComponent', () => {
  let component: AppCheckOutComponent;
  let fixture: ComponentFixture<AppCheckOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCheckOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
