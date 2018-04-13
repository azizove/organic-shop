import { TestBed, inject } from '@angular/core/testing';

import { AppShoppingCartService } from './app-shopping-cart.service';

describe('AppShoppingCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppShoppingCartService]
    });
  });

  it('should be created', inject([AppShoppingCartService], (service: AppShoppingCartService) => {
    expect(service).toBeTruthy();
  }));
});
