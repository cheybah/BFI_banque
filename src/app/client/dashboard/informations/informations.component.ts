import { Component, OnInit, HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CountryISO  } from 'ngx-intl-tel-input';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { navbarData } from '../sidenav/nav-data';
import { TranslateService } from '@ngx-translate/core';
import { CanComponentDeactivate } from '../../../services/can-deactivate.guard';
import Swal from 'sweetalert2';


function noNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const containsNumbers = /\d/.test(control.value);
    return containsNumbers ? { 'hasNumbers': true } : null;
  };
}

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit{

  informationForm: FormGroup;
  selectedCountryISO: CountryISO = CountryISO.Tunisia; // Initialize with Tunisia as default country
  personalInfo: any = {}; // Initialize variable to hold personal information



  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private translate: TranslateService
    ) { 
    this.translate.setDefaultLang('fr');
    this.informationForm = this.formBuilder.group({
      gender: [null, Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      lastName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      photo: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const storedInfoData = this.authService.getTemporaryRegisterData();
    if (storedInfoData) {
      this.informationForm.patchValue(storedInfoData);
    }
  }


 isFormValid(): boolean { //to check if the form is valid
  const form = document.querySelector('.needs-validation') as HTMLFormElement;
  return form.checkValidity();
  }


  @HostListener('window:beforeunload', ['$event']) //to show a message when the user tries to leave the page
  unloadNotification($event: any): void {
    if (this.informationForm.dirty) {
      $event.returnValue = true;
    }
  }

  navData = navbarData;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const fileName = this.extractFileName(file.name);
      const filePath = `src/assets/img/${fileName}`;
      this.informationForm.patchValue({ photo: filePath });
      console.log('File path set to:', filePath); // Log the full file path for debugging
    }
  }

  extractFileName(filePath: string): string {
    return filePath.split('\\').pop()?.split('/').pop() || '';
  }

  Retour() {
    this.router.navigate(['/dash/']);
  }

  Suivant(currentRoute: string): void {
    // Check if informationForm is initialized and is valid
    if (this.informationForm?.valid) {
      // Extracting the formatted phone number from the phoneNumber FormControl
      const formattedPhoneNumber = this.informationForm.get('phoneNumber')?.value.internationalNumber;

      if (formattedPhoneNumber) {
        // Log the extracted phone number for debugging purposes
        console.log('Formatted phone number:', formattedPhoneNumber);

        // Update the phoneNumber field in the form value object
        this.informationForm.patchValue({ phoneNumber: formattedPhoneNumber });
        // Set temporary data for registration
        this.authService.setTemporaryRegisterData(this.informationForm.value);
        console.log('Temporary data saved:', this.informationForm.value); // Log the saved temporary data
      } else {
        console.error('Phone number is null or undefined.');
        // Handle null or undefined phone number
      }
    } else {
      console.error('Form is invalid or informationForm is not initialized.');
      // Handle invalid form or uninitialized informationForm
    }

    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex < this.navData.length - 1) {
      this.navData[currentIndex].visited = true;
      const nextComponent = this.navData[currentIndex].routeLink;
      this.router.navigate(['/dash/' + nextComponent]);
    }
  }
}
