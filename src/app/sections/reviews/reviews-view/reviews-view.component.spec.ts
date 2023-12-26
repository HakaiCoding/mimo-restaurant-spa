import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsViewComponent } from './reviews-view.component';

describe('ReviewsViewComponent', () => {
  let component: ReviewsViewComponent;
  let fixture: ComponentFixture<ReviewsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsViewComponent]
    });
    fixture = TestBed.createComponent(ReviewsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
