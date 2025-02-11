import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  photos:string[]=[
    '../../../assets/images/nosotros_1.png',
    '../../../assets/images/nosotros_2.png',
    '../../../assets/images/nosotros_3.png',
    '../../../assets/images/nosotros_4.png',    
  ];

  slide(){
    if(this.photos.length > 0){    
      this.photos.unshift(this.photos.pop()!);
    }   
  }

}
