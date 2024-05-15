import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie'; // Import Lottie types
import  { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent {

  constructor(private router: Router) { } 

  lottieOptions: AnimationOptions = {
    path: "/assets/lottie/no-favs.json", 
  };

  searchText = ''; // Text for filtering contacts
  contacts = [
    { id: 1, name: 'John Doe', favorite: false },
    { id: 2, name: 'Jane Smith', favorite: false },
    { id: 3, name: 'Peter Brown', favorite: false },
    { id: 4, name: 'Mounira Beltaief', favorite: false },
  ];

  // Function to filter contacts based on search text
  filteredContacts() {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Function to toggle a contact's favorite status
  toggleFavorite(contact: any) {
    contact.favorite = !contact.favorite;
  }

  // Function to get favorite contacts
  favoriteContacts() {
    return this.contacts.filter(contact => contact.favorite);
  }

  // Function to add a new contact
  addContact() {
    const newContact = {
      id: this.contacts.length + 1, // Unique ID for the new contact
      name: 'New Contact',
      favorite: false, // Default to not favorite
    };

    this.contacts.push(newContact); // Add new contact to the list
    this.router.navigate(['/accounts/my-contacts-add']); // Navigate to the add contact page
  }

  animationCreated(animation: any) {
    console.log('Lottie animation created:', animation);
  }
}
