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

  setTemporaryRegisterData(data: any): void {   //to store the data from informations form in the temporaryData variable
    this.temporaryData = data;
  }

  getTemporaryRegisterData(): any { //to get the data from the temporaryData variable
    return this.temporaryData;
  }

  setTemporaryCombinedData(data: any): void {
    // Merge the new data with the existing temporary data
    this.temporaryData = { ...this.temporaryData, ...data };
  }

  clearTemporaryRegisterData(): void {
    this.temporaryData = null; // Reset temporary data to null
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

  /*uploadPhoto(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.baseUrl}/dash/informations-personelles/${userId}/photo`, formData)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }*/
}

