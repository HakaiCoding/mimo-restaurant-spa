import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from './hero-view/hero-view.component';
import { MatCardModule } from '@angular/material/card';
import { IconsModule } from 'src/app/shared/icons/icons.module';



@NgModule({
  declarations: [
    HeroViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    IconsModule,
  ],
  exports: [
    HeroViewComponent
  ]
})
export class HeroModule { }
