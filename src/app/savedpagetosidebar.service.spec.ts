import { TestBed } from '@angular/core/testing';

import { SavedpagetosidebarService } from './savedpagetosidebar.service';

describe('SavedpagetosidebarService', () => {
  let service: SavedpagetosidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedpagetosidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
