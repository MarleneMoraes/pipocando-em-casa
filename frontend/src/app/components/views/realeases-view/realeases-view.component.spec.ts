import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealeasesViewComponent } from './realeases-view.component';

describe('RealeasesViewComponent', () => {
  let component: RealeasesViewComponent;
  let fixture: ComponentFixture<RealeasesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealeasesViewComponent]
    });
    fixture = TestBed.createComponent(RealeasesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
