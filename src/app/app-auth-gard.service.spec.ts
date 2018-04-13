import { TestBed, inject } from '@angular/core/testing';

import { AppAuthGardService } from './app-auth-gard.service';

describe('AppAuthGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAuthGardService]
    });
  });

  it('should be created', inject([AppAuthGardService], (service: AppAuthGardService) => {
    expect(service).toBeTruthy();
  }));
});
