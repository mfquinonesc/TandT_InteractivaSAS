import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs: Blog []=[
    {
      url:'../../../assets/images/blogs_1.png',
      title:'DESTINOS PARA PAREJAS EN 2025' ,
      description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...',
    },
    {
      url:'../../../assets/images/blogs_2.png',
      title: 'VUELVE LA VISA PARA VIAJAR A LONDRES',
      description:'',
    },
    {
      url:'../../../assets/images/blogs_3.png',
      title:'TOP 3 DESTINOS EN COLOMBIA' ,
      description:'',
    },
  ];
}
