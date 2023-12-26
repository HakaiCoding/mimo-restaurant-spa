import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactViewComponent } from './contact-view/contact-view.component';



@NgModule({
  declarations: [
    ContactViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactViewComponent
  ]
})
export class ContactModule { }
