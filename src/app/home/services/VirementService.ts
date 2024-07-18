import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Virement } from './virement';
import { Depot } from './Depot';

@Injectable({
  providedIn: 'root'
})
export class VirementService {

  private apiUrl = 'http://localhost:8080/virements'; // Remplacez par votre URL d'API
  private apiUrl1 = 'http://localhost:8080/depot/allDepots'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les virements depuis l'API
  getVirements(): Observable<Virement[]> {
    return this.http.get<Virement[]>(this.apiUrl);
  }
  getDepot(): Observable<Depot[]> {
    return this.http.get<Depot[]>(this.apiUrl1);
  }
}
