
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service'; // Veuillez importer votre service AxiosService correctement
import { PageTitleService } from 'src/app/services/PageTitleService';
import axios from 'axios';

@Component({
  selector: 'app-my-contacts-add',
  templateUrl: './my-contacts-add.component.html',
  styleUrls: ['./my-contacts-add.component.css']
})
export class MyContactsAddComponent implements OnInit, AfterViewInit {
  scannerEnabled = false;
  ribValue: string = '';
  gender: string = '';
  accountCards: any[] = [];
  fullName: string = '';
  contactType: string = '';
  address: string = '';
  categorie: string = '';
  isFavorite: boolean = false;
  uploadedFileName: string = '';
  imageContact: string = '';
  contactId: number = 0;
  clientId: number | null = null;

  @ViewChild('scanner', { static: false }) scanner!: NgxScannerQrcodeComponent;

  constructor(private router: Router, private axiosService: AxiosService, private pageTitleService: PageTitleService) { }
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
      this.scanner.data.subscribe((data: any) => {
        if (data && data.value) {
          this.ribValue = data.value;
          console.log('scanned rib value is', this.ribValue);
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
 
  onScanResult(event: any): void {
    if (Array.isArray(event) && event.length > 0) {
      this.ribValue = event[0].value;
      this.scannerEnabled = false;
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

  addAccount(): void {
    this.accountCards.push({
      accountType: '',
      rib: '',
      accountLabel: ''
    });
  }

  deleteCard(index: number): void {
    this.accountCards.splice(index, 1);
  }

  clearFormFields(): void {
    this.ribValue = '';
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFileName = file.name;
    }
  }

  validateContactData(contactData: any): boolean {
    if (!contactData.fullName || !contactData.address || !contactData.gender || !contactData.categorie) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fill in all required fields.',
        confirmButtonColor: '#B48F44'
      });
      return false;
    }
    return true;
  }
 
  addContact(contactData: any): Promise<any> {
    console.log("Sending contact data to server:", contactData);

    return axios.post('/contacts', contactData)
      .then(response => {
        console.log("Server response:", response);
        return response;
      })
      .catch(error => {
        console.error("Error response:", error.response);
        throw error;
      });
  }

  addContactToClient(clientId: number, contactId: number): Promise<any> {
    return axios.put(`/clients/${clientId}/contacts/${contactId}`, null);
  }

  finish(): void {
    const contactData = {
      gender: this.gender || "default_gender",
      address: this.address || "default_address",
      imageContact: this.imageContact || "default_image",
      categorie: this.categorie || "famille",
      fullName: this.fullName || "default_name"
    };

    if (!this.validateContactData(contactData)) {
      return;
    }

    const clientIdStr = localStorage.getItem('userId');
    if (clientIdStr) {
      this.clientId = parseInt(clientIdStr, 10);
      if (isNaN(this.clientId)) {
        console.error('Invalid client ID');
        return;
      }
    } else {
      console.error('Client ID is missing');
      return;
    }

    this.addContact(contactData)
      .then((response) => {
        this.contactId = response.data.contactId;
        return this.addContactToClient(this.clientId!, this.contactId);
      })
      .then((response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Contact added to client successfully!',
          confirmButtonColor: '#B48F44'
        }).then(() => {
          this.router.navigate(['/accounts/my-contacts']);
        });
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add contact. Please try again later.',
          confirmButtonColor: '#B48F44'
        });
      });
  }
}
