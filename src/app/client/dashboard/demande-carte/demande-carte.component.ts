import { Component } from '@angular/core';

@Component({
  selector: 'app-demande-carte',
  templateUrl: './demande-carte.component.html',
  styleUrls: ['./demande-carte.component.css']
})
export class DemandeCarteComponent {

  menuEntrieActive = true;
  menuEntrieActiveMsg = '';
  accts = [
    { accountDetails: { description: 'Compte courant', accountNumber: '123456' } },
    // Ajoutez vos autres comptes ici
  ];
  banks = [
    { fullName: 'ORABANK GABON' },
    { fullName: 'UBA GABON' },
  ];
  inquiry = {
    account: null,
    bank: null,
    withDelivery: false,
    feeAmount: '',
  };
  decision = false;
  errorsBalance = false;

  onAccountChange(account: any) {
    console.log('Account selected:', account);
    // Logique pour obtenir le solde ou autre
  }

  onBankChange(bank: any) {
    console.log('Bank selected:', bank);
    // Logique pour obtenir des commissions ou autre
  }

  onDeliveryChange(delivery: any) {
    console.log('Delivery option changed:', delivery);
    // Logique pour gérer la livraison
  }

  onDecisionChange(decision: any) {
    console.log('Decision changed:', decision);
  }

  onNextStep() {
    console.log('Move to the next step');
    // Logique pour passer à l'étape suivante
  }
}
