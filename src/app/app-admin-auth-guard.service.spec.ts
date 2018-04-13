import { TestBed, inject } from '@angular/core/testing';

import { AppAdminAuthGuardService } from './app-admin-auth-guard.service';

describe('AppAdminAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAdminAuthGuardService]
    });
  });

  it('should be created', inject([AppAdminAuthGuardService], (service: AppAdminAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
