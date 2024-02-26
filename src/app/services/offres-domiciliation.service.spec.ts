import { TestBed } from '@angular/core/testing';

import { OffresDomiciliationService } from './offres-domiciliation.service';

describe('OffresDomiciliationService', () => {
  let service: OffresDomiciliationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffresDomiciliationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
