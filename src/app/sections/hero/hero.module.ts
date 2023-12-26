import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from './hero-view/hero-view.component';



@NgModule({
  declarations: [
    HeroViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroViewComponent
  ]
})
export class HeroModule { }
