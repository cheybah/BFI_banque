import { TestBed } from '@angular/core/testing';

import { AutresInformationsService } from './autres-informations.service';

describe('AutresInformationsService', () => {
  let service: AutresInformationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutresInformationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
