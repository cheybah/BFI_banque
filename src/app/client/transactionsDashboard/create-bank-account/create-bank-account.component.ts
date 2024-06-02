import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument } from 'pdf-lib';


@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {

    compteType = "Compte Epargne";
    clientName = "Mme BAHROUN Cheyma"
    qrData = '400212410360';
    accountBalance = "0";

    constructor(private router: Router) { }

    GoToDepotRetrait(): void {
      this.router.navigate(['/transactions/virement/depot-retrait']);
    }

  async downloadPDF() {
    // Fetch the existing PDF template from the assets folder
    const existingPdfBytes = await fetch('/assets/bamboo-template.pdf').then(res => res.arrayBuffer());

    // Load the PDF template
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();

    // Calculate Y position for centering content
    const contentHeight = 5 * 12 + 100; // Assuming each line is 12pt and there are 5 lines
    const yPosition = (height - contentHeight)/1.2;

    // Add your dynamic content to the PDF
    firstPage.drawText('Account Information :', {
      x: 50,
      y: yPosition + 40, // Adjusted Y position
      size: 25,
    });

    // Adding the dynamic data to the PDF with increased Y positions for spacing
    firstPage.drawText(`Account Type: ${this.compteType}`, {
      x: 50,
      y: yPosition ,
      size: 12,
    });

    firstPage.drawText(`Client Name: ${this.clientName}`, {
      x: 50,
      y: yPosition - 40,
      size: 12,
    });

    firstPage.drawText(`Account Number: ${this.qrData}`, {
      x: 50,
      y: yPosition - 80,
      size: 12,
    });

    firstPage.drawText(`Account Balance: ${this.accountBalance}`, {
      x: 50,
      y: yPosition - 120,
      size: 12,
    });

    // Embedding QR code
    const qrImageBytes = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(this.qrData)}`).then(res => res.arrayBuffer());
    const qrImage = await pdfDoc.embedPng(qrImageBytes);
    firstPage.drawImage(qrImage, {
      x: width - 100, // Centering QR code horizontally
      y: yPosition - 180, // Adjusting Y position as needed
      width: 50,
      height: 50,
    });

    // Save the modified PDF
    const pdfBytes = await pdfDoc.save();

    // Create a blob from the PDF bytes
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'account-details.pdf';
    link.click();
}

}
