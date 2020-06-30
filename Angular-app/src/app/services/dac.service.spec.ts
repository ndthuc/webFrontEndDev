import { TestBed } from '@angular/core/testing';

import { DACService } from './dac.service';

describe('DACService', () => {
  let service: DACService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DACService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
