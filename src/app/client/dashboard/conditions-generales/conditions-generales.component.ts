import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-conditions-generales',
  templateUrl: './conditions-generales.component.html',
  styleUrls: ['./conditions-generales.component.css']
})
export class ConditionsGeneralesComponent {

  constructor(private router : Router) {}
  conditionsAccepted: boolean = false;
  formSubmitted: boolean = false;
  navData = navbarData;

  submitForm(currentRoute: string): void {
      this.formSubmitted = true;
      if (this.conditionsAccepted) {
          // Soumettre le formulaire ou effectuer d'autres actions
          console.log("Form submitted successfully!");
          this.router.navigate(['/dash/mot-de-passe']);
      } else {
          // Ne rien faire, car le formulaire n'est pas valide
      }
      
    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex < this.navData.length - 1) {
      this.navData[currentIndex].visited = true;
      const nextComponent = this.navData[currentIndex ].routeLink;
      this.router.navigate(['/dash/' + nextComponent]);
    }

  }
  Retour(currentRoute: string): void {
    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex >= 0) {
      this.navData[currentIndex].visited = false;
    }
    window.history.back();
  }
  
}
