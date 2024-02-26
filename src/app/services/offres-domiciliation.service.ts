import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountOffer } from '../client/dashboard/models/AccountOffer';


@Injectable({
  providedIn: 'root'
})
export class OffresDomiciliationService {

  private apiUrl = 'http://localhost:8080/dash/offres-et-domicialisation'; // Update with your API endpoint

  constructor(private http: HttpClient) { }

  getAllAccountOffers(): Observable<AccountOffer[]> {
    return this.http.get<AccountOffer[]>(this.apiUrl);
  }

  getAccountOfferById(id: number): Observable<AccountOffer> {
    return this.http.get<AccountOffer>(`${this.apiUrl}/${id}`);
  }

  saveAccountOffer(accountOffer: AccountOffer): Observable<AccountOffer> {
    return this.http.post<AccountOffer>(this.apiUrl, accountOffer);
  }

  updateAccountOffer(id: number, accountOffer: AccountOffer): Observable<AccountOffer> {
    return this.http.put<AccountOffer>(`${this.apiUrl}/${id}`, accountOffer);
  }
}
