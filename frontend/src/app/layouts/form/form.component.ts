import { Component } from '@angular/core';
import { Country } from 'src/app/models/country';
import { Tag } from 'src/app/models/tag';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  
  tags:Tag[] = [];
  numbers:number[] = []; 

  countries:Country[] = [
    { id: 1, name: "Argentina", code: "AR", continent: "America" },
    { id: 2, name: "Brazil", code: "BR", continent: "America" },
    { id: 3, name: "Canada", code: "CA", continent: "America" },
    { id: 4, name: "France", code: "FR", continent: "Europe" },
    { id: 5, name: "Germany", code: "DE", continent: "Europe" },
    { id: 6, name: "India", code: "IN", continent: "Asia" },
    { id: 7, name: "Japan", code: "JP", continent: "Asia" },
    { id: 8, name: "Mexico", code: "MX", continent: "America" },
    { id: 9, name: "Spain", code: "ES", continent: "Europe" },
    { id: 10, name: "United States", code: "US", continent: "America" }
  ];

  constructor(private mediaService:MediaService){
    for(let i = 0; i < 10; i++){
      this.numbers.push(i);
    }
    this.getTags();
  }

  getTags(){
    this.mediaService.getTags().subscribe({
      next:(value)=>{
        this.tags = value as Tag[];
      },
    })
  }


}
