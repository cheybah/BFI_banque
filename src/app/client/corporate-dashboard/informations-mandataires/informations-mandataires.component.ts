import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CountryISO  } from 'ngx-intl-tel-input';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {  navproData } from '../../dashboard/sidenav/nav-data';
import { TranslateService } from '@ngx-translate/core';

function noNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const containsNumbers = /\d/.test(control.value);
    return containsNumbers ? { 'hasNumbers': true } : null;
  };
}

@Component({
  selector: 'app-informations-mandataires',
  templateUrl: './informations-mandataires.component.html',
  styleUrls: ['./informations-mandataires.component.css']
})
export class InformationsMandatairesComponent  implements OnInit {

  entrepriseInformationForm: FormGroup;
  selectedCountryISO: CountryISO = CountryISO.Tunisia; // Initialize with Tunisia as default country
  personalInfo: any = {}; // Initialize variable to hold personal information
  navData = navproData;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private translate: TranslateService
  ) { 
    this.translate.setDefaultLang('fr');
    this.entrepriseInformationForm = this.formBuilder.group({
      gender: [null, Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      lastName: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      photo: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      TypeOfPiece:['', Validators.required],
      PieceIdentity:['', Validators.required]
    });
  }

  ngOnInit(): void {
    const storedInfoData = this.authService.getTemporaryRegisterData();
    if (storedInfoData) {
      this.entrepriseInformationForm.patchValue(storedInfoData);
    }
  }

  
 isFormValid(): boolean { //to check if the form is valid
  const form = document.querySelector('.needs-validation') as HTMLFormElement;
  return form.checkValidity();
  }

  Retour() {
    this.router.navigate(['/professionnel/']); 
  }

  Suivant(currentRoute: string): void {
    if (this.isFormValid()) {
      const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
      if (currentIndex < this.navData.length - 1) {
        this.navData[currentIndex].visited = true;
        const nextComponent = this.navData[currentIndex].routeLink;
        this.router.navigate(['/professionnel/' + nextComponent]);
      }
      // Save temporary registration data
      this.authService.setTemporaryRegisterData(this.entrepriseInformationForm.value);
    } else {
      console.error('Form is invalid.');
      // Handle invalid form
    }
  }
  
}


