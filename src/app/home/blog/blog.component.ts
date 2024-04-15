import{ BlogService} from'./blogService';

import { Component, ViewChild, ElementRef } from '@angular/core';

interface Blog {
  id: number;
  blog_title: string;
  blog_description: string;
  blog_photo: string;
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  today: Date = new Date();

  @ViewChild('blogPhotoInput') blogPhotoInput!: ElementRef<HTMLInputElement>;
  @ViewChild('blogTitleInput') blogTitleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('blogDescriptionInput') blogDescriptionInput!: ElementRef<HTMLTextAreaElement>;

  blogs: Blog[] | undefined;

  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
  //  console.log('ngOnInit triggered.');
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAllBlogs()
      .subscribe(
        (blogs: Blog[]) => {
          this.blogs = blogs.map(blog => ({
            ...blog,
            blog_photo: `assets/img/blog/${blog.blog_photo}` // Mettez à jour le chemin d'accès à l'image ici
          }));
        },
        error => console.error('Error fetching blogs:', error)
      );
}

}
