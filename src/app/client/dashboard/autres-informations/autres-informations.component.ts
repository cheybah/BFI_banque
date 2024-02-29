import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutresInformationsService } from '../../../services/autres-informations.service';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})

export class AutresInformationsComponent implements OnInit{
  
  navData = navbarData;

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

Retour(currentRoute: string): void {
  const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
  if (currentIndex >= 0) {
    this.navData[currentIndex].visited = false;
  }
  window.history.back();
}


Suivant(currentRoute: string): void {
  if (this.infoForm && this.infoForm.valid) {
    const formData: FormGroup = this.infoForm; // Get the form group
    this.saveAdditionalInfo(formData); // Pass the form values to saveAdditionalInfo method

    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex < this.navData.length - 1) {
      this.navData[currentIndex].visited = true;
      const nextComponent = this.navData[currentIndex].routeLink;
      this.router.navigate(['/dash/' + nextComponent]);
    }
  } else {
    console.error('Form is invalid or addressForm is not initialized.');
  }
}
}
