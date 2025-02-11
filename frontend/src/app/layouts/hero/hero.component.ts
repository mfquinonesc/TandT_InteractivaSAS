import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {

  adds: { url: string; text: string }[] = [
    {
      url: '../../../assets/images/viajes_grupales.png',
      text: 'Viajes grupales',
    },
    {
      url: '../../../assets/images/viajes_a_la_medida.png',
      text: 'Viajes a la medida',
    },
    {
      url: '../../../assets/images/destinos_para_parejas.png',
      text: 'Destinos para parejas',
    },
  ];

  isMobile: boolean = window.innerWidth <= 1023;

  index: number = 0;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 1023;   
  } 
 
  goForward() {
    this.index = (this.index + 1) % this.adds.length;    
  }
  
  goBackward() {
    this.index = this.index == 0 ? this.adds.length - 1 : this.index - 1;    
  }
}
