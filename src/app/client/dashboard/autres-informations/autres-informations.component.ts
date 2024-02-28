import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutresInformationsService } from '../../../services/autres-informations.service';

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})
export class AutresInformationsComponent implements OnInit{
  
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

ngOnInit(): void {
  const storedAdditionalInfoData = this.autresInformationsService.getTemporaryAdditionalInfoData();
  if (storedAdditionalInfoData) {
    this.infoForm.patchValue(storedAdditionalInfoData);
  }
}


saveAdditionalInfo(form: FormGroup): void {
  if (form.valid) {
    const formData = form.value; 
    console.log('Temporary form data:', formData);

    // Instead of directly saving to backend, store in temporary storage
    this.autresInformationsService.setTemporaryAdditionalInfoData(formData);

    // Navigate to the next step
    this.router.navigate(['/dash/offres-et-domicialisation']);
  } else {
    console.error('Form is invalid.');
  }
}

Retour(){
  this.router.navigate(['/dash/adresse']); // Replace '/adresse' with the actual route path of your "Adresse" component
}

Suivant(): void {
  this.saveAdditionalInfo(this.infoForm);
}
}
