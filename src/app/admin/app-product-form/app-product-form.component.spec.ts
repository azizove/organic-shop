import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductFormComponent } from './app-product-form.component';

describe('AppProductFormComponent', () => {
  let component: AppProductFormComponent;
  let fixture: ComponentFixture<AppProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
