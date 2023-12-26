import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsViewComponent } from './reviews-view/reviews-view.component';



@NgModule({
  declarations: [
    ReviewsViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReviewsViewComponent
  ]
})
export class ReviewsModule { }
