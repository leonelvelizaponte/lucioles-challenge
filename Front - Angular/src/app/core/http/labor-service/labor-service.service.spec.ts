import { TestBed } from '@angular/core/testing';

import { LaborServiceService } from './labor-service.service';

describe('LaborServiceService', () => {
  let service: LaborServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaborServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
