import { TestBed } from '@angular/core/testing';

import { HeaderAppService } from './header-app.service';

describe('HeaderAppService', () => {
  let service: HeaderAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
