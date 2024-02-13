import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres-et-domicialisation',
  templateUrl: './offres-et-domicialisation.component.html',
  styleUrls: ['./offres-et-domicialisation.component.css']
})
export class OffresEtDomicialisationComponent {
  comptes = [
    { label: 'Compte Courant', value: 'courant' },
    { label: 'Compte Épargne', value: 'epargne' },
    { label: 'Compte Jeunesse', value: 'jeunesse' }
];

constructor(private router: Router) { }

selectCompte(compte: string) {
    console.log('Compte sélectionné :', compte);
    // Ajoutez votre logique de sélection de compte ici
}

Retour(){
  this.router.navigate(['/dash/autres-informations']); // Replace '/adresse' with the actual route path of your "Adresse" component
}
Suivant(){
  this.router.navigate(['/dash/conditions-generales']); // Replace '/adresse' with the actual route path of your "Adresse" component
}
}
