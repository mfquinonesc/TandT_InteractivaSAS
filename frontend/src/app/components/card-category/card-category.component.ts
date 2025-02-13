import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css'],
})
export class CardCategoryComponent {

  @Input() category: Category | null = null;
  path: string = '';

  constructor(private mediaService: MediaService) {   
    this.path = this.mediaService.path;
  } 
}
