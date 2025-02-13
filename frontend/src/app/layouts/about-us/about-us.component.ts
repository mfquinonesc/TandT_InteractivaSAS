import { Component } from '@angular/core';
import { Company } from 'src/app/models/company';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {

  path: string = '';
  companies: Company[]=[];

  constructor(private mediaService: MediaService) {
    this.path = this.mediaService.path;
    this.getCompanies();
  }

  getCompanies(){
    this.mediaService.getCompanies().subscribe({
      next:(value)=>{      
        this.companies = value as Company[];
      },
    });
  }


}
