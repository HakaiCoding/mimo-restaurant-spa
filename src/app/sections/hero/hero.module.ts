import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from './hero-view/hero-view.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    HeroViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    HeroViewComponent
  ]
})
export class HeroModule { }
