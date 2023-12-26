import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuViewComponent } from './menu-view/menu-view.component';



@NgModule({
  declarations: [
    MenuViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuViewComponent
  ]
})
export class MenuModule { }
