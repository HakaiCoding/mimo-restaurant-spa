import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';



@NgModule({
  declarations: [
    GalleryViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryViewComponent
  ]
})
export class GalleryModule { }
