import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private baseUrl = 'http://localhost:8080'; // URL de base de votre API backend

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les détails du compte bancaire d'un client par son ID
  getBankAccountByClientId(clientId: number) {
    return this.http.get(`${this.baseUrl}/bankaccounts/client/${clientId}`);
  }
}
