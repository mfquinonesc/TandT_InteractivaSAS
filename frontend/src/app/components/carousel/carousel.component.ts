import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 
  @Input() company:Company|null = null;

  path:string = '';

  photos:string[]=[];

  constructor(private mediaService:MediaService){
    this.path = mediaService.path;
  }

  ngOnInit(): void {    
    if(this.company != null){
      this.photos = [];
      this.company.feed_instagram.forEach(f=>{
        this.photos.push(this.path + f.image);
      });
    }
  }

 
  slide(){
    if(this.photos.length > 0){    
      this.photos.unshift(this.photos.pop()!);
    }   
  }

}
