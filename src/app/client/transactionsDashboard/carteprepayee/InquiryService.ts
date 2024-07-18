import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InquiryService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAccountsByClient(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bankaccounts/client/${clientId}`);
  }

  getBanks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/banks`);  // Assurez-vous de changer cette URL si nécessaire
  }
}
