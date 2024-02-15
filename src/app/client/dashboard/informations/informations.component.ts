import { Component  } from '@angular/core';
import { Router } from '@angular/router';

import { CountryISO, SearchCountryField  } from 'ngx-intl-tel-input';
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
export class InformationsComponent  {

  searchCountryFields: SearchCountryField[] =
   [SearchCountryField.Name, SearchCountryField.Iso2, SearchCountryField.DialCode];

  infoForm: FormGroup;
  selectedCountryISO: CountryISO = CountryISO.Tunisia; // Initialize with Tunisia as default country

  constructor(private router: Router,
    private formBuilder: FormBuilder
    ) { 
    this.infoForm = this.formBuilder.group({
      genre: [null, Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      lastName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      formFile: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  

  

  isFormValid(): boolean {
    const form = document.querySelector('.needs-validation') as HTMLFormElement;
    return form.checkValidity();
  }


  Retour(){
    this.router.navigate(['/dash/']); 
  }
  Suivant(){
    this.router.navigate(['/dash/adresse']); 
  }
}
