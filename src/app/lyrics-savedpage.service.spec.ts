import { TestBed } from '@angular/core/testing';

import { LyricsSavedpageService } from './lyrics-savedpage.service';

describe('LyricsSavedpageService', () => {
  let service: LyricsSavedpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LyricsSavedpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
