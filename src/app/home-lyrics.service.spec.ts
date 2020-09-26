import { TestBed } from '@angular/core/testing';

import { HomeLyricsService } from './home-lyrics.service';

describe('HomeLyricsService', () => {
  let service: HomeLyricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLyricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
