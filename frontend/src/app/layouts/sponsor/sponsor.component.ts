import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent {

  logos:string[] = [
    '../../../assets/images/logo1.png',
    '../../../assets/images/logo2.png',
    '../../../assets/images/logo3.png',
    '../../../assets/images/logo4.png',
    '../../../assets/images/logo5.png',
    '../../../assets/images/logo6.png',
    '../../../assets/images/logo7.png',
  ];
}
