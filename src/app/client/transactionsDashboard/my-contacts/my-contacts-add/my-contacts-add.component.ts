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
  contactType: string = '';
  fullName: string = '';
  address: string = '';
  category: string = '';
  isFavorite: boolean = false;
  uploadedFileName: string = '';
  imageContact: string = '';

  @ViewChild('scanner', { static: false }) scanner!: NgxScannerQrcodeComponent;

  constructor(private router: Router, private axiosService: AxiosService, private pageTitleService: PageTitleService) {}

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
    console.log('we are rib here now');
    if (Array.isArray(event) && event.length > 0) {
      console.log('we are not here now');
      this.ribValue = event[0].value;
      this.scannerEnabled = false;
      console.log('scanned rib value is', this.ribValue);
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

  addContactToClient(clientId: number, contactData: any): Promise<any> {
    return this.axiosService.request('POST', `/clients/${clientId}/contacts`, contactData);
  }

  finish(): void {
    const contactData = {
      gender: this.gender,
      address: this.address,
      imageContact: this.imageContact,
      categorie:"famille",
      fullName: this.fullName
    };

    const clientId = 2;
    this.addContactToClient(clientId, contactData)
      .then((response) => {
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
