import { TestBed } from '@angular/core/testing';

import { HeaderSongService } from './header-song.service';

describe('HeaderSongService', () => {
  let service: HeaderSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
