import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconChefHat, IconHome, IconInfoCircle, IconMenu2, IconPhone, IconPhoto, IconStar, IconX } from 'angular-tabler-icons/icons';

const icons = {
  IconMenu2,
  IconX,
  IconHome,
  IconInfoCircle,
  IconChefHat,
  IconPhoto,
  IconStar,
  IconPhone
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