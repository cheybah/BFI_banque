import { Injectable } from '@angular/core';
import axios from 'axios';

const API_URL = 'http://localhost:8080/service-client/reclamations';

export interface Reclamation {
  reference: string;
  sujet: string;
  contenu: string;
  date: string;
  reponse: string;
  status: string;
  client: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor() { }

  getAllReclamations() {
    return axios.get<Reclamation[]>(API_URL);
  }

  createReclamation(reclamation: Reclamation) {
    let client = localStorage.getItem('userId'); // Retrieve userId from local storage
    reclamation.client = client; // Include client in the request body
    return axios.post<Reclamation>(API_URL, reclamation);
  }
}

