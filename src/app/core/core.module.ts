import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../shared/icons/icons.module';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './header/child-components/navigation-menu/navigation-menu.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
