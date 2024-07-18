import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { PageTitleService } from 'src/app/services/PageTitleService';
import { ContactsService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent {
  scannerEnabled = false;
  fullName: string = '';
  gender: string = '';
  imageContact: string = '';
  categorie: string = '';
  address: string = '';
  rib: string = '';
  accountCards: any[] = [];
  contactType: string = '';
  libelle: string = ''; // Champ libellé
  type: string = ''; // Champ type
  isFavorite: boolean = false;
  uploadedFileName: string = '';
  idContact: number = 0;
  clientId: number | null = null;
  userId: string | null = null; // Déclaration de userId

  @ViewChild('scanner', { static: false }) scanner!: NgxScannerQrcodeComponent;

  constructor(private contactsService: ContactsService, private router: Router, private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitleService.changePageTitle('Mes contacts');
  }

  ngAfterViewInit(): void {
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/js/bootstrap.min.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/js/jquery.nice-select.min.js');
    this.loadScript('assets/js/script.js');

    if (this.scanner) {
      console.log('Scanner is defined.');
      // Abonnez-vous aux données scannées
      this.scanner.data.subscribe((data: any) => {
        if (data && data.value) {
          this.rib = data.value;
          console.log('Scanned rib value is', this.rib);
        }
      });
    } else {
      console.error('Scanner is not defined.');
    }
  }

  loadScript(url: string, callback?: () => void): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
  }

  deleteCard(index: number): void {
    this.accountCards.splice(index, 1);
  }

  toggleScanner(): void {
    this.scannerEnabled = !this.scannerEnabled;
    console.log('Scanner enabled status:', this.scannerEnabled);
    if (this.scannerEnabled) {
      console.log('Starting scanner...');
      if (this.scanner) {
        this.scanner.start();
      } else {
        console.error('Cannot start scanner because it is not defined.');
      }
    } else {
      console.log('Stopping scanner...');
      if (this.scanner) {
        this.scanner.stop();
      } else {
        console.error('Cannot stop scanner because it is not defined.');
      }
    }
  }

  addAccount(): void {
    this.accountCards.push({
      accountType: '',
      rib: '',
      libelle: ''
    });
  }

 
  
  onScanResult(event: any): void {
    console.log('Scan result:', event); // Vérifiez si l'événement est correctement capturé
  
    if (event && event.value) {
      this.rib = event.value;  // Assurez-vous que rib reçoit la valeur correctement
      this.scannerEnabled = false; // Désactivez le scanner après avoir obtenu les données
    }
  }
 
  handleIconClick(): void {
    if (this.scannerEnabled) {
      this.scanner.stop();
      this.scannerEnabled = false;
    } else {
      this.scannerEnabled = true;
      this.scanner.start();
    }
  }

  addContact(event: Event) {
    event.preventDefault();
    const newContact = {
      fullName: this.fullName,
      gender: this.gender,
      imageContact: this.imageContact,
      categorie: this.categorie,
      address: this.address,
      rib: this.rib,
      libelle: this.libelle,
      type: this.type
    };

    this.contactsService.addContact(newContact).subscribe(response => {
      console.log('New contact added:', response);
      this.idContact = response.idContact; // Utilisez idContact au lieu de id
      console.log("dfgh", this.idContact); // Assuming the response contains the newly created contact's ID
      this.userId = localStorage.getItem('userId');
      if (this.userId) {
        this.clientId = parseInt(this.userId, 10);
        this.linkContactToClient(this.clientId, this.idContact);
      } else {
        console.warn('userId is null, cannot link contact to client.');
      }
      // Optionally, you can reset the form fields after adding the contact
      this.resetForm();
    });
  }

  linkContactToClient(clientId: number, idContact: number) {
    this.contactsService.linkContactToClient(clientId, idContact).subscribe(response => {
      console.log('Contact linked to client:', response);
      // Further actions after successfully linking the contact to the client
    });
  }

  resetForm() {
    this.fullName = '';
    this.gender = '';
    this.imageContact = '';
    this.categorie = '';
    this.address = '';
    this.rib = '';
    this.libelle = '';
    this.type = '';
  }
  nomImage: string = ''; // Variable pour stocker le nom de l'image
  
  handleImageUpload(event: any) {
    const file: File = event.target.files[0]; // Récupérer le fichier sélectionné
    
    if (file) {
      // Extraire le nom du fichier à partir de C:\fakepath\
      const nomComplet: string = file.name; // Nom complet du fichier
      const nomFichierSansChemin: string = nomComplet.replace(/^.*[\\\/]/, ''); // Retirer le chemin

      // Utiliser nomFichierSansChemin selon vos besoins
      console.log('Nom du fichier sans chemin:', nomFichierSansChemin);
      this.imageContact = nomFichierSansChemin; // Vous pouvez stocker cela dans votre variable imageContact
    }
  }
}
