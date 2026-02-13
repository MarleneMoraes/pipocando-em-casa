import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSheetCard } from './movie-sheet-card';

describe('MovieSheetCard', () => {
  let component: MovieSheetCard;
  let fixture: ComponentFixture<MovieSheetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieSheetCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSheetCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
