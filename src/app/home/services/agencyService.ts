import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class agencyService {

  constructor(private http: HttpClient) { }

  getAllAgencies(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/agencies');
  }

  deleteAgency(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/agencies/${id}`);
  }
  editAgency(agency: any): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/agencies/${agency.id}`, agency);
  }
    addAgency(agency: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/addAgency', agency);
  }
} 

