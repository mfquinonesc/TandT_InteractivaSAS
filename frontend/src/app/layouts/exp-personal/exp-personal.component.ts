import { Component } from '@angular/core';
import { CustomerExperience } from 'src/app/models/customer-experience';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-exp-personal',
  templateUrl: './exp-personal.component.html',
  styleUrls: ['./exp-personal.component.css'],
})
export class ExpPersonalComponent {

  constructor(private mediaService: MediaService) {
    this.getCustomerExperiences();
    this.path = mediaService.path;
  }

  experiences: CustomerExperience[] = [];
  path:string = '';

  getCustomerExperiences() {
    this.mediaService.getCustomerExperiences().subscribe({
      next: (value) => {      
        this.experiences = value as CustomerExperience[];
      },
    });
  }
}
