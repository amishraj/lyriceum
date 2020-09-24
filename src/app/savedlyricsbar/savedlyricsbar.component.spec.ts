import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedlyricsbarComponent } from './savedlyricsbar.component';

describe('SavedlyricsbarComponent', () => {
  let component: SavedlyricsbarComponent;
  let fixture: ComponentFixture<SavedlyricsbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedlyricsbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedlyricsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
