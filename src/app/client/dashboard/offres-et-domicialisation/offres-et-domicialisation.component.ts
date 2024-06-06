import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffresDomiciliationService } from '../../../services/offres-domiciliation.service';
import { navbarData } from '../sidenav/nav-data';


@Component({
  selector: 'app-offres-et-domicialisation',
  templateUrl: './offres-et-domicialisation.component.html',
  styleUrls: ['./offres-et-domicialisation.component.css']
})
export class OffresEtDomicialisationComponent implements OnInit {
  navData = navbarData;
  offerForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private offresDomiciliationService: OffresDomiciliationService) {
    this.offerForm = this.formBuilder.group({
      agencyId: 1,
      agencyName: [null, Validators.required],
      accountType: [null, Validators.required],
      packType: [null, Validators.required],
   
    });
  }

  ngOnInit(): void {
    const storedOffersData = this.offresDomiciliationService.getTemporaryOffersData();
    if (storedOffersData) {
      this.offerForm.patchValue(storedOffersData);
    }
  }

  comptes = [
    {
      label: 'Courant', value: 'COURANT', packs: [
        { name: 'PACK_ACTIVIA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 TND)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois' },
        { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
        { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' }
      ]
    },
    {
      label: 'Epargne', value: 'EPARGNE', packs: [
        { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
        { name: 'PACK OVA', description: 'Description du PACK OVA' }
      ]
    },
    {
      label: 'Les deux', value: 'LES_DEUX', packs: [
        { name: 'PACK_ACTIVIA', description: 'L\'offre jeune vous accompagne dans votre expérience bancaire.<br>- Dépôt initial (13 000 TND)<br>- Dépôt /Retrait via Mobile Money<br>- Carte visa prépayée<br>- Online Banking<br>5950 Fcfa/ mois' },
        { name: 'PACK ALTITUDE CLASSIQUE', description: 'Description du PACK ALTITUDE CLASSIQUE' },
        { name: 'PACK ALTITUDE PRIVILEGE', description: 'Description du PACK ALTITUDE PRIVILEGE' },
        { name: 'PACK ALTITUDE STANDARD', description: 'Description du PACK ALTITUDE STANDARD' },
        { name: 'PACK OVA', description: 'Description du PACK OVA' }
      ]
    },
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

  Retour(currentRoute: string): void {
    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex >= 0) {
      this.navData[currentIndex].visited = false;
    }
    window.history.back();
  }

  Suivant(currentRoute: string): void {
    if (this.offerForm && this.offerForm.valid) {
      const formData = this.offerForm.value;
      // Instead of directly saving to the backend, store in temporary storage
      this.offresDomiciliationService.setTemporaryOffersData(formData);
      // Log the temporary saved data
      console.log('Temporary data saved:', formData);
    } else {
      console.error('Form is invalid or offerForm is not initialized.');
      return; // Exit the method if form is invalid or not initialized
    }

    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex < this.navData.length - 1) {
      this.navData[currentIndex].visited = true;
      const nextComponent = this.navData[currentIndex].routeLink; // Increment index to get the next component
      this.router.navigate(['/dash/' + nextComponent]);
    }
  }

}
