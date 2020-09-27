import { TestBed } from '@angular/core/testing';

import { SavedlyricsbarHeaderService } from './savedlyricsbar-header.service';

describe('SavedlyricsbarHeaderService', () => {
  let service: SavedlyricsbarHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedlyricsbarHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
