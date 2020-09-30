import { TestBed } from '@angular/core/testing';

import { ApiseedsService } from './apiseeds.service';

describe('ApiseedsService', () => {
  let service: ApiseedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiseedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
