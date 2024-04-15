import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navproData } from '../../dashboard/sidenav/nav-data';


@Component({
  selector: 'app-conditions-generales-entreprise',
  templateUrl: './conditions-generales-entreprise.component.html',
  styleUrls: ['./conditions-generales-entreprise.component.css']
})
export class ConditionsGeneralesEntrepriseComponent {

  constructor(private router : Router) {}
  conditionsAccepted: boolean = false;
  formSubmitted: boolean = false;
  navData = navproData;

  submitedForm(currentRoute: string): void {
      this.formSubmitted = true;
      if (this.conditionsAccepted) {
          // Soumettre le formulaire ou effectuer d'autres actions
          console.log("Form submitted successfully!");
          this.router.navigate(['/professionnel/mot-de-passe-entreprise']);
      } else {
          // Ne rien faire, car le formulaire n'est pas valide
      }
      
    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex < this.navData.length - 1) {
      this.navData[currentIndex].visited = true;
      const nextComponent = this.navData[currentIndex ].routeLink;
      this.router.navigate(['/professionnel/' + nextComponent]);
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

