import { Injectable } from '@angular/core';
import axios from 'axios';


const API_URL = 'http://localhost:8080/service-client/rendezvous';

export interface RendezVous  {
  agence: string;
  raison: string;
  date: string;
  heure: string;
  status: string;
  clientId: string | null; // Change this line
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
    let clientId = localStorage.getItem('userId'); // Retrieve userId from local storage
    if (clientId !== null) {
      rendezVous.clientId = clientId; // Include clientId in the request body
      return axios.post<RendezVous>(API_URL, rendezVous);
    } else {
      throw new Error('User ID not found in local storage');
    }
  }
}
