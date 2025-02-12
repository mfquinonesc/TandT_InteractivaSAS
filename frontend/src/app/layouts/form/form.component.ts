import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  
  btns: string[] = [
    'SAFARI',
    'DEPORTE',
    'ARTE Y CULTURA',
    'DESCANSO',
    'ESPIRITUAL',
    'PLAYA',
    'NATURALEZA'
  ];
}
