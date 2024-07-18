import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent {

  authForm: FormGroup;
  navData = navbarData;

  loginPattern = /^[a-zA-Z0-9]{4,}$/;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  validationMessages = {
    login: {
      required: 'Le login est obligatoire.',
      pattern: 'Le login doit contenir au moins 4 caractères alphanumériques.'
    },
    password: {
      required: 'Le mot de passe est obligatoire.',
      pattern: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.'
    }
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.authForm = this.formBuilder.group({
      login: [null, [Validators.required, Validators.pattern(this.loginPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
  }

  Suivant(currentRoute: string): void {
    const authFormValue = this.authForm.value;
    this.authService.setTemporaryauthData(authFormValue);

    const temporaryData = this.authService.getTemporaryRegisterData();
    console.log('Temporary data:', temporaryData);

    if (temporaryData) {
      const combinedData = { ...temporaryData, ...authFormValue };
      console.log('Combined data:', combinedData);

      this.authService.setTemporaryCombinedData(combinedData);
      console.log('Temporary combined data stored:', combinedData);

      this.router.navigate(['/dash/validation']);
    } else {
      console.error('Temporary data not found.');
    }

    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    this.navData[currentIndex].visited = true;
    const nextComponent = this.navData[currentIndex].routeLink;
    this.router.navigate(['/dash/' + nextComponent]);
  }
}
