import { TestBed } from '@angular/core/testing';

import { HeaderLyricsService } from './header-lyrics.service';

describe('HeaderLyricsService', () => {
  let service: HeaderLyricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLyricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
