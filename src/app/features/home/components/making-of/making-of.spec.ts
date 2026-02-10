import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingOf } from './making-of';

describe('MakingOf', () => {
  let component: MakingOf;
  let fixture: ComponentFixture<MakingOf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakingOf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakingOf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
