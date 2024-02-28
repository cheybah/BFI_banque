import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdditionalInfo } from '../client/dashboard/models/AdditionalInfo'; // Assuming you have a model for AdditionalInfo


@Injectable({
  providedIn: 'root'
})
export class AutresInformationsService {

  private baseUrl = 'http://localhost:8080/dash/autres-informations'; // Replace with your backend API endpoint

  private temporaryAdditionalInfoData: any;

  setTemporaryAdditionalInfoData(data: any): void {   //to store the data from informations form in the temporaryData variable
    this.temporaryAdditionalInfoData = data;
  }

  getTemporaryAdditionalInfoData(): any { //to get the data from the temporaryData variable
    return this.temporaryAdditionalInfoData;
  }

  clearTemporaryAdditionalInfoData(): void {
    this.temporaryAdditionalInfoData = null; // Reset temporary data to null
  }

  constructor(private http: HttpClient) { }

  saveAdditionalInfo(info: AdditionalInfo): Observable<AdditionalInfo> {
    return this.http.post<AdditionalInfo>(this.baseUrl, info);
  }
}