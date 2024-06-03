import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie'; // Import Lottie types
import  { Router } from '@angular/router'; // Import Router
import { AxiosService } from 'src/app/services/axios.service';


@Component({
  selector: 'app-my-contacts',
  templateUrl: './my-contacts.component.html',
  styleUrls: ['./my-contacts.component.css']
})
export class MyContactsComponent {
  userId: string | null = null; // Déclaration de userId
  contacts: any[] = [];

  constructor(private router: Router,private axiosService :AxiosService) { } 

  lottieOptions: AnimationOptions = {
    path: "/assets/lottie/no-favs.json", 
  };

  searchText = ''; // Text for filtering contacts
 /* contacts = [
    { id: 1, name: 'John Doe', favorite: false },
    { id: 2, name: 'Jane Smith', favorite: false },
    { id: 3, name: 'Peter Brown', favorite: false },
    { id: 4, name: 'Mounira Beltaief', favorite: false },
  ];
*/
  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis le localStorage
    this.userId = localStorage.getItem('userId');
    if (this.userId) {
      // Si l'ID de l'utilisateur est disponible, charger les contacts
      this.loadClientContacts(parseInt(this.userId)); // Convertir l'ID en nombre
    } else {
      console.error('User ID not found in local storage.');
    }
  }

  loadClientContacts(clientId: number) {
    this.axiosService.request('GET', `/clients/${clientId}/contacts`, null)
      .then((response) => {
        this.contacts = response.data;
      })
      .catch((error) => {
        console.error('Error fetching client contacts:', error);
      });
  }// Function to filter contacts based on search text
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
