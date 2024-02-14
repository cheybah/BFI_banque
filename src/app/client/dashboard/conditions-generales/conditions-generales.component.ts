import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions-generales',
  templateUrl: './conditions-generales.component.html',
  styleUrls: ['./conditions-generales.component.css']
})
export class ConditionsGeneralesComponent {
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
}
