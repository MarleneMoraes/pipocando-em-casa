import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCard } from './review-card';

describe('ReviewCard', () => {
  let component: ReviewCard;
  let fixture: ComponentFixture<ReviewCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
