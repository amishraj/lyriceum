import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedlyricspageComponent } from './savedlyricspage.component';

describe('SavedlyricspageComponent', () => {
  let component: SavedlyricspageComponent;
  let fixture: ComponentFixture<SavedlyricspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedlyricspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedlyricspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
