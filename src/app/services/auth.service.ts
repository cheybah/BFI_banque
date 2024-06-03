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
  private userId!: number;

 
  setUserId(userId: number) {
    this.temporaryData.userId = userId;
  }
  
  getUserId(): number {
    return this.temporaryData.userId;
  }
  
  setTemporaryRegisterData(data: any): void {
    this.temporaryData = data;
  }
  
  getTemporaryauthData(): any {
    return this.temporaryData.authForm;
  }
  setTemporaryLogin(data: any): void {
    this.temporaryData.authForm.login = data;
  }
  setTemporaryPassword(data: any): void {
    this.temporaryData.authForm.pass = data;
  }setTemporaryauthData(data: any): void {
    this.temporaryData.authForm = data;
  }
  getTemporaryLogin(): any {
    return this.temporaryData.authForm.login;
  }
   getTemporaryPassword(): any {
    return this.temporaryData.authForm.password;
  }
  getTemporaryRegisterData(): any {
    return this.temporaryData;
  }
  setTemporaryAdditionalInfo(data: any): void {
    this.temporaryData.additionalInfo = data;
  }
  
  getTemporaryAdditionalInfo(): any {
    return this.temporaryData.additionalInfo;
  }
  
  setTemporaryAddress(data: any): void {
    this.temporaryData.address = data;
  }
  
  getTemporaryAddress(): any {
    return this.temporaryData.address;
  }
  
  setTemporaryOffersData(data: any): void {
    this.temporaryData.offersData = data;
  }
  
  getTemporaryOffersData(): any {
    return this.temporaryData.offersData;
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
    return this.http.post<any>(`${this.baseUrl}/register/personne-physique`, user)
      .pipe(
        catchError(error => {
          throw error; 
        })
      );
  }


}
