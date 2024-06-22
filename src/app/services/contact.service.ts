// contacts.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private apiUrl: string = 'http://localhost:8080/contacts';

  constructor(private http: HttpClient) { }

  addContact(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData);
  }
  linkContactToClient(clientId: number, contactId: number): Observable<any> {
    const url = `http://localhost:8080/clients/${clientId}/contacts/${contactId}`;
    return this.http.put<any>(url, {});
  }
}
