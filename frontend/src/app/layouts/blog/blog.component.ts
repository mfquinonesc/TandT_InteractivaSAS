import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  
  path: string = '';
  blogs: Blog[] = [];

  constructor(private mediaService: MediaService) {
    this.getBlogs();
    this.path = this.mediaService.path;
  }


  getBlogs() {
    this.mediaService.getBlogs().subscribe({
      next: (value) => {
        this.blogs = value as Blog[];
      },
    });
  }
}
