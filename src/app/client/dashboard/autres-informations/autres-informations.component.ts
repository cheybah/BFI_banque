import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutresInformationsService } from '../../../services/autres-informations.service';

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})
export class AutresInformationsComponent {
  
  infoForm: FormGroup;
  today: Date = new Date();

  constructor(private router: Router,
  private formBuilder: FormBuilder,
  private autresInformationsService: AutresInformationsService) {

  this.infoForm = this.formBuilder.group({
  typeIndividual: ['', Validators.required],
  profession: ['', Validators.required],
  pieceType: ['', Validators.required],
  pieceNumber: ['', Validators.required],
  expirationDate: ['', Validators.required],
  piecePhoto: ['', Validators.required],
  referralCode: ['']
  });
}  

saveAdditionalInfo(): void {
  if (this.infoForm.valid) {
    const additionalInfoData = this.infoForm.value;
    this.autresInformationsService.saveAdditionalInfo(additionalInfoData)
      .subscribe(
        response => {
          console.log('Additional info saved successfully:', response);
          // Optionally, you can reset the form or navigate to another page here
        },
        error => {
          console.error('Error saving additional info:', error);
        }
      );
  } else {
    // Form is invalid, handle accordingly
  }
}

Retour(){
  this.router.navigate(['/dash/adresse']); // Replace '/adresse' with the actual route path of your "Adresse" component
}

Suivant(): void {
  if (this.infoForm && this.infoForm.valid) {
    const formData: FormGroup = this.infoForm; // Get the form group
    this.saveAdditionalInfo(); // Pass the form values to saveAdditionalInfo method
    this.router.navigate(['/dash/offres-et-domicialisation']);
  } else {
    console.error('Form is invalid or addressForm is not initialized.');
  }
}
}
