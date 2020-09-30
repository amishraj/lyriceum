import { TestBed } from '@angular/core/testing';

import { MobileselecteventService } from './mobileselectevent.service';

describe('MobileselecteventService', () => {
  let service: MobileselecteventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileselecteventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
