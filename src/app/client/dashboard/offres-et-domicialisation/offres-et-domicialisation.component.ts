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
  selectedPack: string | null = null;
  selectedPackDescription: string | null = null;
  selectedCompte: string | null = null;

  selectCompte(value: string) {
    const compte = this.comptes.find(c => c.value === value);
    if (compte) {
      // Si le compte sélectionné est le même que celui déjà sélectionné
      // alors on efface la sélection du compte et les packs affichés
      if (this.selectedCompte === value) {
        this.selectedCompte = null;
        this.packsAffiches = [];
      } else {
        // Sinon, on met à jour le compte sélectionné et les packs affichés
        this.selectedCompte = value;
        this.packsAffiches = compte.packs;
      }
      // On efface également la sélection du pack et sa description
      this.selectedPack = null;
      this.selectedPackDescription = null;
    }
  }

  selectPack(packName: string, description: string) {
    this.selectedPack = this.selectedPack === packName ? null : packName;
    this.selectedPackDescription = this.selectedPack === packName ? description : null;
  }

  isPackSelected(packName: string): boolean {
    return this.selectedPack === packName;
  }

  isCompteSelected(value: string): boolean {
    return this.selectedCompte === value;
  }

  Retour() {
    this.router.navigate(['/dash/autres-informations']);
  }

  Suivant() {
    this.router.navigate(['/dash/conditions-generales']);
  }
}
