import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconMenu2, IconX } from 'angular-tabler-icons/icons';

// Select some icons (use an object, not an array)
const icons = {
  IconMenu2,
  IconX,
};

@NgModule({
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class IconsModule { }