import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HeroModule } from './sections/hero/hero.module';
import { AboutUsModule } from './sections/about-us/about-us.module';
import { MenuModule } from './sections/menu/menu.module';
import { GalleryModule } from './sections/gallery/gallery.module';
import { ReviewsModule } from './sections/reviews/reviews.module';
import { ContactModule } from './sections/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HeroModule,
    AboutUsModule,
    MenuModule,
    GalleryModule,
    ReviewsModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
