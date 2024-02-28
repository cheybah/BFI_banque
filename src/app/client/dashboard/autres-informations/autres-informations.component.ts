import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutresInformationsService } from '../../../services/autres-informations.service';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})
export class AutresInformationsComponent {
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
    this.saveAdditionalInfo(); // Pass the form values to saveAdditionalInfo method
  } else {
    console.error('Form is invalid or addressForm is not initialized.');
  
}
const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
  if (currentIndex < this.navData.length - 1) {
    this.navData[currentIndex].visited = true;
    const nextComponent = this.navData[currentIndex ].routeLink;
    this.router.navigate(['/dash/' + nextComponent]);
  }
}
}
