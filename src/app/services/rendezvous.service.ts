import { Injectable } from '@angular/core';
import axios from 'axios';


const API_URL = 'http://localhost:8080/service-client/rendezvous';

export interface RendezVous  {
  agence: string;
  raison: string;
  date: string;
  heure: string;
  status: string;
  client: any;
}

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {

  constructor() { }

  getAllRendezVous() {
    return axios.get<RendezVous[]>(API_URL);
  }

  createRendezVous(rendezVous: RendezVous) {
    let client = localStorage.getItem('userId'); // Retrieve userId from local storage
    rendezVous.client = client; // Include client in the request body
    return axios.post<RendezVous>(API_URL, rendezVous);
  }
}
