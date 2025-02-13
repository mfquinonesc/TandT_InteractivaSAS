import { Component } from '@angular/core';
import { Partner } from 'src/app/models/partner';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {

  partners: Partner[] = [];
  path: string = '';

  logos: string[] = [];

  constructor(private mediaService: MediaService) {
    this.path = mediaService.path;
    this.getPartners();
  }

  getPartners() {
    this.mediaService.getPartners().subscribe({
      next: (value) => {  
        this.partners = value as Partner[];
        this.partners.forEach(p => {
          if(p.logo){
            this.logos.push(this.path + p.logo);
          }
        });        
      },
    });
  }

}
