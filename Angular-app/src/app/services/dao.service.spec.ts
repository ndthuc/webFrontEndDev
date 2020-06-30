import { TestBed } from '@angular/core/testing';

import { DAOService } from './dao.service';

describe('DAOService', () => {
  let service: DAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
