import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent  {
  constructor(private router: Router) { }
  

  Retour(){
    this.router.navigate(['/dash/']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
  Suivant(){
    this.router.navigate(['/dash/adresse']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
}
