import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument } from 'pdf-lib';
import { Account } from './account'; // Adjust path if needed



@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {

  accounts: Account[] = [];
  compteType: string[] = ['COMPTE EPARGNE', 'COMPTE COURANT'];
  selectedCompteType: string = 'COMPTE EPARGNE';
  clientName: string = '';
  qrData: string = '';
  accountBalance: string = '0'; // Default value for account balance

  showModal: boolean = false;

    constructor(private router: Router) { }

    openModal() {
      this.showModal = true;
      console.log('true you are here');
    }
  
    closeModal() {
      this.showModal = false;
    }

    generateRandomAccountNumber(): string {
      return Math.floor(1000000 + Math.random() * 9000000).toString();
    }
  
    addAccount() {
      const accountNumber = this.generateRandomAccountNumber();
      const newAccount: Account = {
        id: String(this.accounts.length + 1),
        compteType: this.selectedCompteType,
        clientName: this.clientName,
        qrData: accountNumber,
        accountBalance: '0' // Always set to 0 when adding a new account
      };
  
      this.accounts.push(newAccount);
      this.resetForm();
      this.closeModal();
    }
  
    resetForm() {
      this.selectedCompteType = 'COMPTE EPARGNE';
      this.clientName = '';
      this.qrData = '';
      this.accountBalance = '0'; // Reset account balance to 0
    }

    

    GoToDepotRetrait(): void {
      this.router.navigate(['/transactions/virement/depot-retrait']);
    }
    async downloadPDF(account: any) {
      const existingPdfBytes = await fetch('/assets/bamboo-template.pdf').then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { width, height } = firstPage.getSize();
      const contentHeight = 5 * 12 + 100;
      const yPosition = (height - contentHeight) / 1.2;
  
      firstPage.drawText('Account Information :', { x: 50, y: yPosition + 40, size: 25 });
      firstPage.drawText(`Account Type: ${account.compteType}`, { x: 50, y: yPosition, size: 12 });
      firstPage.drawText(`Client Name: ${account.clientName}`, { x: 50, y: yPosition - 40, size: 12 });
      firstPage.drawText(`Account Number: ${account.qrData}`, { x: 50, y: yPosition - 80, size: 12 });
      firstPage.drawText(`Account Balance: ${account.accountBalance}`, { x: 50, y: yPosition - 120, size: 12 });
  
      const qrImageBytes = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(account.qrData)}`).then(res => res.arrayBuffer());
      const qrImage = await pdfDoc.embedPng(qrImageBytes);
      firstPage.drawImage(qrImage, { x: width - 100, y: yPosition - 180, width: 50, height: 50 });
  
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'account-details.pdf';
      link.click();
    }
    
}
