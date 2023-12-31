import { NgModule } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconBrandFacebookFilled, IconBrandGoogleFilled, IconBrandInstagram, IconBrandTripadvisor, IconMailFilled, IconMapPinFilled, IconMenu2, IconPhoneFilled, IconX } from 'angular-tabler-icons/icons';

const icons = {
  IconMenu2,
  IconX,
  IconPhoneFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandGoogleFilled,
  IconBrandTripadvisor,
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