import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeroComponent } from './layouts/hero/hero.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ExpirienceComponent } from './layouts/expirience/expirience.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { ExpPersonalComponent } from './layouts/exp-personal/exp-personal.component';
import { CardBlogComponent } from './components/card-blog/card-blog.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { FormComponent } from './layouts/form/form.component';
import { SponsorComponent } from './layouts/sponsor/sponsor.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CardCategoryComponent } from './components/card-category/card-category.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    AboutUsComponent,   
    CarouselComponent,
    ExpirienceComponent,
    CardExperienceComponent,
    ExpPersonalComponent,
    CardBlogComponent,
    BlogComponent,
    FormComponent,
    SponsorComponent,
    ContactComponent,    
    CardCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
