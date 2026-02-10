import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Releases } from './releases';

describe('Releases', () => {
  let component: Releases;
  let fixture: ComponentFixture<Releases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Releases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Releases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
