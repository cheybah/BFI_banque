import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfert-rapide',
  templateUrl: './transfert-rapide.component.html',
  styleUrls: ['./transfert-rapide.component.css']
})
export class TransfertRapideComponent {
  transferForm: FormGroup;
  choix: number = 0;


  choixTransfert(choix: number): void {
    this.choix = choix;
  }
  countries: string[] = ['Afghanistan', 'Afrique du Sud', 'Albanie', 'Algérie', 'Allemagne'];
  // Dans votre composant TypeScript
  selectedFileName: string | undefined;


  constructor(private formBuilder: FormBuilder) {
    this.transferForm = this.formBuilder.group({
      country: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      fees: [''],
      question: [''],
      answer: [''],
      recipientName: ['', Validators.required],
      recipientFirstName: ['', Validators.required],
      recipientPhone: [''],
      identityDocument: ['']
    });
  }

  onSubmit() {
    if (this.transferForm.valid) {
      console.log('Form data:', this.transferForm.value);
    } else {
      console.log('Invalid form');
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    }
  }
}
