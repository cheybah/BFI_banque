// depot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
  private apiUrl = 'http://localhost:8080/depot/requestDeposit';

  constructor(private http: HttpClient) {}

  makeDeposit(deposit: any): Observable<any> {
    return this.http.post(this.apiUrl, deposit);
  }
}
