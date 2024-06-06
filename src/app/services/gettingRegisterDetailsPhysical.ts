
import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosService } from './axios.service';


const API_2 = 'http://localhost:8080';
const API_URL = 'http://localhost:8080/adminClients';

export interface physicalUser  {
 
    "id": Number,
    "firstName": string,
    "lastName": string,
    "email": string,
    "gender": string,
    "photo": string,
    "phoneNumber": string,
    "dateOfBirth": Date,
    "login": string,
    "password": string,
    "status": boolean,
    "address": any,
    "agency":any,
    "bankAccountList": any,
    "rendezVous": any,
    "notifications":any,
    "reclamations": any,
    "contacts": any,
    "additionalInfo": any
}

@Injectable({
  providedIn: 'root'
})
export class gettingRegisterDetailsPhysical {

  constructor(private axiosService: AxiosService) { }

  getAllPhysicalClients() {
    return axios.get<gettingRegisterDetailsPhysical[]>(API_URL);
  }
GetprofileInfo(){
  let clientId = localStorage.getItem('userId'); // Retrieve userId from local storage

  return  this.axiosService.request('GET', `/Clients/${clientId}`, null); 
}
  
}
