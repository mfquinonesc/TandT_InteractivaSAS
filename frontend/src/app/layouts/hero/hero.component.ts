import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner';
import { Category } from 'src/app/models/category';
import { MediaService } from 'src/app/services/media.service';
import { MobileHandler } from 'src/app/utilities/mobile-handler';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent extends MobileHandler {

  categories: Category[] = [];
  banners: Banner[] = [];
  path: string = '';
  title: string = '';
  urlBg: string = '';

  constructor(private mediaService: MediaService) {
    super();
    this.getCategories();
    this.getBanners();
    this.path = this.mediaService.path;
  }

  @HostListener('window:resize')
  override onResize() {
    super.onResize()
  }

  getBanners() {
    this.mediaService.getBanners().subscribe({
      next: (value) => {
        this.banners = value as Banner[];
        this.title = this.banners[0].title;
        this.urlBg = this.path + this.banners[0].image;
      },
    });
  }

  getCategories() {
    this.mediaService.getCategories().subscribe({
      next: (value) => {
        this.categories = value as Category[];
        this.length = this.categories.length;        
      },
    });
  } 
}
