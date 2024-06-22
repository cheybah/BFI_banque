import { Component } from '@angular/core';
import { DepotService } from 'src/app/services/DepotService ';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent {
  deposit = {
    montant: null,
    ribDepotCompteSource: '',
    depotOption: '',
    motif:'' // Ce champ sera mis à jour par la méthode choixVersement
  };

  constructor(private depotService: DepotService) {}

  choixVersement(choice: string) {
    this.deposit.depotOption = choice; // Assurez-vous que depotOption est une chaîne de caractères
  }

  getChoiceLabel(choice: number): string {
    switch (choice) {
      case 1:
        return 'En Agence';
      case 2:
        return 'Station native';
      case 3:
        return 'Via Mobile Money';
      case 4:
        return 'Via banque';
      default:
        return '';
    }
  }

  onSubmit() {
    if (!this.deposit.depotOption) {
      console.error('Erreur: aucune option de dépôt sélectionnée');
      return;
    }

    console.log('Sending deposit data:', this.deposit);
    this.depotService.makeDeposit(this.deposit).subscribe(
      response => {
        console.log('Dépôt réussi', response);
        // Afficher un message de succès ou rediriger l'utilisateur
      },
      error => {
        console.error('Erreur lors du dépôt', error);
      }
    );
  }
}
