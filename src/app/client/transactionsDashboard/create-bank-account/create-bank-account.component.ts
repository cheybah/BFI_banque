import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {
  compteType = "Compte Epargne";
  ClientName = "Mme BAHROUN CheymaF"
  qrData = '400212410360';
  accountBalance = "0";
  constructor(private router: Router) { }
  GoToDepotRetrait(): void {
    this.router.navigate(['/transactions/virement/depot-retrait']);
  }
}
