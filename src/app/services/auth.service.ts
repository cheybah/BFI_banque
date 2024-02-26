import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  private temporaryData: any;

  setTemporaryData(data: any): void {   //to store the data from informations form in the temporaryData variable
    this.temporaryData = data;
  }

  getTemporaryData(): any { //to get the data from the temporaryData variable
    return this.temporaryData;
  }

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/dash/informations-personelles`, user)
      .pipe(
        catchError(error => {
          throw error; 
        })
      );
  }
}

