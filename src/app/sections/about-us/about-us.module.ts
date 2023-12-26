import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsViewComponent } from './about-us-view/about-us-view.component';



@NgModule({
  declarations: [
    AboutUsViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutUsViewComponent
  ]
})
export class AboutUsModule { }
