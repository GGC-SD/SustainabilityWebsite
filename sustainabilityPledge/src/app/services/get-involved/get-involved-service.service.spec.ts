import { TestBed } from '@angular/core/testing';

import { GetInvolvedServiceService } from './get-involved-service.service';

describe('GetInvolvedServiceService', () => {
  let service: GetInvolvedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInvolvedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
