import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent {

  @Input() blog: Blog | null = null;
  path: string = '';

  constructor(private service: MediaService) {
    this.path = service.path;
  }

}
