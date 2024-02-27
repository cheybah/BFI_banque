import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { OffresDomiciliationService } from '../../../services/offres-domiciliation.service';


@Component({
  selector: 'app-offres-et-domicialisation',
  templateUrl: './offres-et-domicialisation.component.html',
  styleUrls: ['./offres-et-domicialisation.component.css']
})
export class OffresEtDomicialisationComponent {

  offerForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private offresDomiciliationService: OffresDomiciliationService){ 
      this.offerForm = this.formBuilder.group({
        agencyName: [null, Validators.required],
        accountType: [null, Validators.required],
        packType : [null, Validators.required]
      });
     }
  
  comptes = [
    { label: 'Courant', value: 'COURANT', packs: [
      { name: 'PACK_ACTIVIA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 XAF)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois'}, 
      { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
      { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' },
      { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
      { name: 'PACK OVA', description: 'Description du PACK OVA' }
    ] },
    { label: 'Epargne', value: 'EPARGNE', packs: [
      { name: 'PACK ACTIVA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 XAF)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois'}, 
      { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
      { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' },
      { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
      { name: 'PACK OVA', description: 'Description du PACK OVA' }
    ] },
    { label: 'Les deux', value: 'LES_DEUX', packs: [
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
            // Set the accountType value in the form
            this.offerForm.patchValue({
                accountType: compte.value
            });
        }
        // On efface également la sélection du pack et sa description
        this.selectedPack = null;
        this.selectedPackDescription = null;
    }
}


selectPack(packName: string, description: string) {
  this.selectedPack = this.selectedPack === packName ? null : packName;
  this.selectedPackDescription = this.selectedPack === packName ? description : null;
  if (this.selectedPack) {
      // Set the packType value in the form
      this.offerForm.patchValue({
          packType: this.selectedPack
      });
  } else {
      // If no pack is selected, reset the packType value in the form
      this.offerForm.patchValue({
          packType: null
      });
  }
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
    console.log('Account Offer to be saved:', this.offerForm.value); // Log the account offer object
    this.offresDomiciliationService.saveAccountOffer(this.offerForm.value)
      .subscribe(
        response => {
          console.log('Account Offer saved successfully:', response);
          this.router.navigate(['/dash/conditions-generales']);
        },
        error => {
          console.error('Error occurred while saving account offer:', error);
          // Handle error appropriately
        }
      );
  }

}
