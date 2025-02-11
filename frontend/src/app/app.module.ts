import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AddComponent } from './components/add/add.component';
import { HeroComponent } from './layouts/hero/hero.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { ImageFocusComponent } from './components/image-focus/image-focus.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,   
    HeroComponent,
    AddComponent,
    AboutUsComponent,
    ImageFocusComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
