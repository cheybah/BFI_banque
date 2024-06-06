import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-my-contacts-add',
  templateUrl: './my-contacts-add.component.html',
  styleUrls: ['./my-contacts-add.component.css']
})
export class MyContactsAddComponent implements OnInit, AfterViewInit {

  scannerEnabled = false;
  scannedData: string | null = null;
  ribValue: string = '';
  gender: string = '';
  accountCards: any[] = [];
  contactType: string = ''; // Contact type
  fullName: string = ''; // Contact name
  address: string = ''; // Address
  category: string = ''; // Category
  isFavorite: boolean = false; // Favorites
  uploadedFileName: string = ''; // Uploaded file name
  imageContact: string = '';


  @ViewChild('scanner', { static: false }) scanner!: NgxScannerQrcodeComponent; // Reference to the QR code scanner component

  constructor(private router: Router, private axiosService: AxiosService,private pageTitleService :PageTitleService) { }

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
      // Subscribe to the data Observable
      this.scanner.data.subscribe((data: any) => {
        if (data && data.value) {
          this.ribValue = data.value; // Store the scanned QR code value in ribValue
          console.log('scanned rib value is', this.ribValue); // Log the extracted RIB value
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



  // Toggle scanner visibility
  toggleScanner(): void {
    this.scannerEnabled = !this.scannerEnabled; // Toggle scanner on/off
    console.log('Scanner enabled status:', this.scannerEnabled); // Log the status
    if (this.scannerEnabled) {
      console.log('Starting scanner...');
      if (this.scanner) {
        this.scanner.start(); // Start the scanner when toggled on
      } else {
        console.error('Cannot start scanner because it is not defined.');
      }
    } else {
      console.log('Stopping scanner...');
      if (this.scanner) {
        this.scanner.stop(); // Stop the scanner when toggled off
      } else {
        console.error('Cannot stop scanner because it is not defined.');
      }
    }
  }

  onScanResult(event: any): void {
    console.log('we are rib here now'); // Log the extracted RIB value

    if (Array.isArray(event) && event.length > 0) {
      console.log('we are not here now'); // Log the extracted RIB value

      this.ribValue = event[0].value; // Store the scanned QR code value in ribValue
      this.scannerEnabled = false; // Hide the scanner after scanning
      console.log('scanned rib value is', this.ribValue); // Log the extracted RIB value
    }
  }

  // Method to handle icon click
  handleIconClick(): void {
    if (this.scannerEnabled) {
      this.scanner.stop(); // Stop the scanner if it's running
      this.scannerEnabled = false; // Set to false to hide the scanner
    } else {
      this.scannerEnabled = true; // Set to true to show the scanner
      this.scanner.start(); // Start the scanner
    }
  }

  addAccount() {
    console.log('Adding account...');
    this.accountCards.push({
      accountType: '',
      rib: '',
      accountLabel: ''
    });
  }

  deleteCard(index: number): void {
    this.accountCards.splice(index, 1);
  }

  clearFormFields() {
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
  addContactToClient(clientId: number, contactData: any): Promise<any> {
    return this.axiosService.request('POST', `/clients/${clientId}/contacts`, contactData);
  }
  finish(): void {
    const contactData = {
      gender: this.gender,
      address: this.address,
      imageContact: this.imageContact,
      fullName: this.fullName,

    };

    const clientId = 2;
    this.addContactToClient(clientId, contactData)
      .then((response) => {
        // Affichage d'une boîte de dialogue de succès
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Contact added successfully!',
          confirmButtonColor: '#B48F44'
        }).then(() => {
          this.router.navigate(['/accounts/my-contacts']);
        });
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add contact. Please try again later.',
          confirmButtonColor: '#B48F44'
        });
      });
  }

}


