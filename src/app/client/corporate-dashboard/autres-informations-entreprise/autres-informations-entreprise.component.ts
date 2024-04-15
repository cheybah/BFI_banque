import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutresInformationsService } from '../../../services/autres-informations.service';
import {  navproData } from '../../dashboard/sidenav/nav-data';
@Component({
  selector: 'app-autres-informations-entreprise',
  templateUrl: './autres-informations-entreprise.component.html',
  styleUrls: ['./autres-informations-entreprise.component.css']
})
export class AutresInformationsEntrepriseComponent {
  navData = navproData;

  infoForm: FormGroup;
  today: Date = new Date();

  constructor(private router: Router,
  private formBuilder: FormBuilder,
  private autresInformationsService: AutresInformationsService) {

  this.infoForm = this.formBuilder.group({
  taille: ['', Validators.required],
  domaine: ['', Validators.required],
  pieceType: ['', Validators.required],
  NatureSecteur: ['', Validators.required],
  juridiquePhoto: ['', Validators.required],
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
    this.router.navigate(['/professionnel/offres-et-domicialisation-entreprise']);
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
  console.log("this",this.infoForm);
  if (this.infoForm && this.infoForm.valid) {
    const formData: FormGroup = this.infoForm; // Get the form group
    this.saveAdditionalInfo(formData); // Pass the form values to saveAdditionalInfo method

    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex < this.navData.length - 1) {
      this.navData[currentIndex].visited = true;
      const nextComponent = this.navData[currentIndex].routeLink;
      this.router.navigate(['/professionnel/' + nextComponent]);
    }
  } else {
    console.error('Form is invalid or addressForm is not initialized.');
  }
}
}

