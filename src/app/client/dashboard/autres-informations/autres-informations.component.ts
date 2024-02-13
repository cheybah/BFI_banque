import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})
export class AutresInformationsComponent {
  constructor(private router: Router) { }
  today: Date = new Date();

  Retour(){
    this.router.navigate(['/dash/adresse']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
  Suivant(){
    this.router.navigate(['/dash/offres-et-domicialisation']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
}
