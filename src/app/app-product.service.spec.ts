import { TestBed, inject } from '@angular/core/testing';

import { AppProductService } from './app-product.service';

describe('AppProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppProductService]
    });
  });

  it('should be created', inject([AppProductService], (service: AppProductService) => {
    expect(service).toBeTruthy();
  }));
});
