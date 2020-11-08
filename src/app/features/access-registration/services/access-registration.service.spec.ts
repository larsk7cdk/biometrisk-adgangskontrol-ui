import { TestBed } from '@angular/core/testing';

import { AccessRegistrationService } from './access-registration.service';

describe('AccessRegistrationService', () => {
  let service: AccessRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
