import { Component, HostListener, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { MediaService } from 'src/app/services/media.service';
import { MobileHandler } from 'src/app/utilities/mobile-handler';

@Component({
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.css'],
})
export class ExpirienceComponent extends MobileHandler {
  travels: Travel[] = [];

  constructor(private mediaService: MediaService) {
    super();
    this.getTravels();
  }

  @HostListener('window:resize')
  override onResize() {
    super.onResize()
  }

  getTravels() {
    this.mediaService.getTravels().subscribe({
      next: (value) => {
        this.travels = value as Travel[];
        this.length = this.travels.length;
      },
    });
  }

  override goForward(): void {
    if (this.travels.length > 0) {
      const firstElement = this.travels.shift();
      this.travels.push(firstElement!);
    }
  }

  override goBack(): void {
    if (this.travels.length > 0) {
      this.travels.unshift(this.travels.pop()!);
    }
  }
}
