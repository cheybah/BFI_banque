import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Blog {
    id: number;
    blog_title: string;
    blog_description: string;
    blog_photo: string;
  }
  
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'http://localhost:8080'; // Remplacez ceci par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.baseUrl}/blogs`);
  }

}
