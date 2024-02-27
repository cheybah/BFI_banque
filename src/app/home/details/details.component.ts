import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  loanAmount: number=0;
  interestRate: number=5;
  loanTerm: number=0;
  monthlyPayment: number=0;

  

  calculatePayment() {
    const loanAmount=this.loanAmount;
    const annualInterestRate = this.interestRate / 100; // Convertir le taux d'intérêt annuel en décimal
    const monthlyInterestRate = annualInterestRate / 12; // Calculer le taux d'intérêt mensuel
    const numberOfPayments = this.loanTerm * 12; // Calculer le nombre total de paiements
    // Calcul du paiement mensuel selon la formule fournie
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    this.monthlyPayment = monthlyPayment;
  }
}
