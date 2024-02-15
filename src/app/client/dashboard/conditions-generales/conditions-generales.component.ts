import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conditions-generales',
  templateUrl: './conditions-generales.component.html',
  styleUrls: ['./conditions-generales.component.css']
})
export class ConditionsGeneralesComponent {

  constructor(private router : Router) {}
  conditionsAccepted: boolean = false;
  formSubmitted: boolean = false;

  submitForm() {
      this.formSubmitted = true;
      if (this.conditionsAccepted) {
          // Soumettre le formulaire ou effectuer d'autres actions
          console.log("Form submitted successfully!");
      } else {
          // Ne rien faire, car le formulaire n'est pas valide
      }
  }

  Suivant(){
    this.router.navigate(['/dash/mot-de-passe']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
}
