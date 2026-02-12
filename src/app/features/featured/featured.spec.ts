import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featured } from './featured';

describe('Featured', () => {
  let component: Featured;
  let fixture: ComponentFixture<Featured>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featured]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featured);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
