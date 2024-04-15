import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CountryISO  } from 'ngx-intl-tel-input';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { navproData } from '../../dashboard/sidenav/nav-data';
import { TranslateService } from '@ngx-translate/core';

function noNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const containsNumbers = /\d/.test(control.value);
    return containsNumbers ? { 'hasNumbers': true } : null;
  };
}

@Component({
  selector: 'app-informations-entreprise',
  templateUrl: './informations-entreprise.component.html',
  styleUrls: ['./informations-entreprise.component.css']
})
export class InformationsEntrepriseComponent implements OnInit {

  
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
      formJuridique: [null, Validators.required],
      gender: [null, Validators.required],
      raisonSociale: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      catégorie: ['', [Validators.required, Validators.minLength(2), noNumbersValidator()]],
      codeRCCM: ['', [Validators.required]],
      codeNIF: ['', [Validators.required]],
      creation_date: ['', Validators.required],
      abreviation: ['', Validators.required]
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


  navData = navproData;

  
  Retour(currentRoute: string): void {
    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex >= 0) {
      this.navData[currentIndex].visited = false;
    }
    window.history.back();
  }
  
  Suivant(currentRoute: string): void {
    // Check if informationForm is initialized and is valid
    if (this.informationForm?.valid) {

      const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
      if (currentIndex < this.navData.length - 1) {
        this.navData[currentIndex].visited = true;
        const nextComponent = this.navData[currentIndex ].routeLink;
        this.router.navigate(['/professionnel/' + nextComponent]);
      }
    }

  }
  
}






