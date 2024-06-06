import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument } from 'pdf-lib';
import { Account } from './account';
import { PageTitleService } from 'src/app/services/PageTitleService';
import { BankAccountService } from 'src/app/services/bankAccountService';
import { gettingRegisterDetailsPhysical } from 'src/app/services/gettingRegisterDetailsPhysical';



@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {
  clientId: number | null = null;
  accounts: Account[] = [];
  compteType: string[] = ['COMPTE EPARGNE', 'COMPTE COURANT'];
  selectedCompteType: string = 'COMPTE EPARGNE';
  clientName: string = '';
  qrData: string = '';
  bankaccountqrdata: string = '';
  accountBalance: string = '0';
  bankAccount: any;
  extractedRIB: string = '';
  solde: number = 0;
  showModal: boolean = false;
  clientDetails: any={};
  firstName: string="";
  lastName: string="";
  constructor(private gettingRegisterDetailsPhysical:gettingRegisterDetailsPhysical,private router: Router, private pageTitleService: PageTitleService, private bankAccountService: BankAccountService) { }

  openModal() {
    this.showModal = true;
    console.log('true you are here');
  }
  ngOnInit(): void {
    this.gettingRegisterDetailsPhysical.GetprofileInfo().then(response => {
      this.clientDetails = response.data;
      // Assignation des détails du client aux variables correspondantes
      this.firstName = this.clientDetails.firstName || '';
      this.lastName = this.clientDetails.lastName || '';
    });
    this.pageTitleService.changePageTitle('Mes Comptes');
    const clientIdStr = localStorage.getItem('userId');
    if (clientIdStr !== null) {
      this.clientId = parseInt(clientIdStr, 10);
      // Vérifier si la conversion a réussi
      if (!isNaN(this.clientId)) {
        // Appeler le service pour récupérer les détails du compte bancaire du client
        this.bankAccountService.getBankAccountByClientId(this.clientId)
          .subscribe((data: any) => {
            // Vérifier si data est un tableau et s'il contient des éléments
            if (Array.isArray(data) && data.length > 0) {
              this.bankAccount = data[0]; // Prendre le premier élément du tableau
              console.log("Réponse complète de l'API:", this.bankAccount);
              console.log("RIB:", this.bankAccount.rib);
              this.extractedRIB = this.bankAccount.rib.substring(7, 14);
              this.solde = this.bankAccount.solde;
              this.bankaccountqrdata = this.bankAccount.rib;

            } else {
              console.error('No bank account details found');
            }
          }, (error) => {
            console.error('Error fetching bank account details:', error);
          });
      } else {
        console.error('Invalid user ID format');
      }
    } else {
      console.error('User ID is not available in localStorage');
      // Gérer le cas où l'ID utilisateur n'est pas disponible dans le localStorage
    }
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
    this.accountBalance = '0';
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
  async downloadPDFmainAccout(account: any) {
    const existingPdfBytes = await fetch('/assets/bamboo-template.pdf').then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    const contentHeight = 5 * 12 + 100;
    const yPosition = (height - contentHeight) / 1.2;

    firstPage.drawText('Account Information :', { x: 50, y: yPosition + 40, size: 25 });
    firstPage.drawText(`Account Type: ${this.bankAccount.compteType}`, { x: 50, y: yPosition, size: 12 });
    firstPage.drawText(`Client Name: ${this.clientDetails.firstName}`+` ${this.clientDetails.lastName}`, { x: 50, y: yPosition - 40, size: 12 });
    firstPage.drawText(`Account Number: ${this.bankaccountqrdata}`, { x: 50, y: yPosition - 80, size: 12 });
    firstPage.drawText(`Account Balance: ${this.bankAccount.solde}`, { x: 50, y: yPosition - 120, size: 12 });

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
