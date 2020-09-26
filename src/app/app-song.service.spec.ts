import { TestBed } from '@angular/core/testing';

import { AppSongService } from './app-song.service';

describe('AppSongService', () => {
  let service: AppSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
