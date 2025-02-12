import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.css']
})
export class CardBlogComponent {

 @Input() blog:Blog|null = null;

}
