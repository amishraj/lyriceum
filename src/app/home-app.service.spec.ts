import { TestBed } from '@angular/core/testing';

import { HomeAppService } from './home-app.service';

describe('HomeAppService', () => {
  let service: HomeAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
