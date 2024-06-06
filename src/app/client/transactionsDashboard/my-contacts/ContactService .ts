import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: any[] = [];
  private contactCount: number = 0; // Ajout du compteur de contacts

  constructor() { }

  setContacts(contacts: any[]) {
    this.contacts = contacts;
  }

  getContacts(): any[] {
    return this.contacts;
  }
  setContactCount(count: number): void {
    this.contactCount = count;
  }

  getContactCount(): number {
    return this.contacts.length;
  }
}
