import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFilter } from './genre-filter';

describe('GenreFilter', () => {
  let component: GenreFilter;
  let fixture: ComponentFixture<GenreFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
