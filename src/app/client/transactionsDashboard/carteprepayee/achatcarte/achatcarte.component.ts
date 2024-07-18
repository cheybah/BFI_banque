import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-achatcarte',
  templateUrl: './achatcarte.component.html',
  styleUrls: ['./achatcarte.component.css']
})
export class AchatcarteComponent {
  inquiryForm: FormGroup | undefined;
  steps = [{ current: true }, { current: false }];
  menuEntrieActive = false;
  menuEntrieActiveMsg = '';
  accts: any[] = [];
  banks: any[] = [];
  clientId: number | undefined;
  selectedAccount: any;
  selectedBank: any;

  constructor(private fb: FormBuilder,    private pageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.pageTitleService.changePageTitle('Carte Prepayée');
    this.inquiryForm = this.fb.group({
      account: ['', Validators.required],
      bank: ['', Validators.required],
      withDelivery: [null, Validators.required],
      feeAmount: [{ value: '', disabled: true }],
      decision: [false, Validators.requiredTrue]
    });

    const storedClientId = localStorage.getItem('clientId');
    if (storedClientId) {
      this.clientId = +storedClientId;
      this.loadAccounts();
    } else {
      console.error('Client ID is not found in local storage');
    }

    this.loadBanks();
  }

  loadAccounts() {
   
  }

  loadBanks() {
   
  }

  getBalance(accountNumber: string) {
    // Implémentez cette fonction pour obtenir le solde
  }

  getCommission(inquiry: any) {
    // Implémentez cette fonction pour obtenir les frais
  }

  checkBalance(inquiry: any) {
    // Implémentez cette fonction pour vérifier le solde
  }

  moveNextStep(stepIndex: number) {
    this.steps.forEach((step, index) => {
      step.current = index === stepIndex;
    });
  }
}
