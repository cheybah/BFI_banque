import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-extrait',
  templateUrl: './extrait.component.html',
  styleUrls: ['./extrait.component.css']
})
export class ExtraitComponent {
  accountNumber = '60072680201';
  accountType = 'COMPTE COURANT';
  accountBalance = '123000';
  generatePdf(): void {
    // Crée un nouveau document PDF
    const doc = new jsPDF();

    // Ajoute du texte au PDF
    doc.text('Informations du Compte', 10, 10);
    doc.text(`Compte : ${this.accountNumber}`, 10, 20);
    doc.text(`Type : ${this.accountType}`, 10, 30);
    doc.text(`Solde : ${this.accountBalance} TND`, 10, 40);

    // Télécharge le PDF
    doc.save('account-info.pdf');
  }
}
