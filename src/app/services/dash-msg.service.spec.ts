import { TestBed } from '@angular/core/testing';

import { DashMsgService } from './dash-msg.service';

describe('DashMsgService', () => {
  let service: DashMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
