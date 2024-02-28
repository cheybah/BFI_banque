import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CountryISO  } from 'ngx-intl-tel-input';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


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
    private authService: AuthService
    ) { 
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


  Retour(){
    this.router.navigate(['/dash/']); 
  }

  Suivant() {
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
  
        // Proceed to the next form or any other actions
        // For example, navigate to the authentication form
        this.router.navigate(['/dash/adresse']);
      } else {
        console.error('Phone number is null or undefined.');
        // Handle null or undefined phone number
      }
    } else {
      console.error('Form is invalid or informationForm is not initialized.');
      // Handle invalid form or uninitialized informationForm
    }
  }
  
  
  

}
