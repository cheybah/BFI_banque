import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres-et-domicialisation',
  templateUrl: './offres-et-domicialisation.component.html',
  styleUrls: ['./offres-et-domicialisation.component.css']
})
export class OffresEtDomicialisationComponent {
  constructor(private router: Router) { }
  comptes = [
    { label: 'Courant', value: 'Courant', packs: [
      { name: 'PACK ACTIVA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 XAF)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois'}, 
      { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
      { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' },
      { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
      { name: 'PACK OVA', description: 'Description du PACK OVA' }
    ] },
    { label: 'Epargne', value: 'Epargne', packs: [
      { name: 'PACK ACTIVA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 XAF)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois'}, 
      { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
      { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' },
      { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
      { name: 'PACK OVA', description: 'Description du PACK OVA' }
    ] },
    { label: 'Les deux', value: 'Les deux', packs: [
      { name: 'PACK ACTIVA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 XAF)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois'}, 
      { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
      { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' },
      { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
      { name: 'PACK OVA', description: 'Description du PACK OVA' }
    ] },
  ];
  packsAffiches: { name: string, description: string }[] = [];
  selectedPacks: string[] = [];
  selectedPackDescription: string | null = null;

togglePackSelection(value: string, description: string) {
    const index = this.selectedPacks.indexOf(value);
    if (index === -1) {
        this.selectedPacks.push(value); // Ajoute le pack à la sélection si ce n'est pas déjà sélectionné
    } else {
        this.selectedPacks.splice(index, 1); // Retire le pack de la sélection s'il est déjà sélectionné
    }
    this.selectedPackDescription = this.selectedPacks.length > 0 ? description : null; // Met à jour la description en fonction des packs sélectionnés
}

  selectCompte(value: string) {
    const compte = this.comptes.find(c => c.value === value);
    if (compte) {
      this.packsAffiches = compte.packs;
    }
  }
  selectPack(value: string, description: string) {
    const index = this.selectedPacks.indexOf(value);
    if (index === -1) {
        this.selectedPacks.push(value); // Ajoute le pack à la sélection si ce n'est pas déjà sélectionné
    } else {
        this.selectedPacks.splice(index, 1); // Retire le pack de la sélection s'il est déjà sélectionné
    }
}

  isSelected(pack: string): boolean {
    return this.selectedPacks.includes(pack);
  }

  Retour() {
    this.router.navigate(['/dash/autres-informations']);
  }

  Suivant() {
    this.router.navigate(['/dash/conditions-generales']);
  }
}
