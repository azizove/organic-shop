import { TestBed, inject } from '@angular/core/testing';

import { AppCategoryService } from './app-category.service';

describe('AppCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCategoryService]
    });
  });

  it('should be created', inject([AppCategoryService], (service: AppCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
