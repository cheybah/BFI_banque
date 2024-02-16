import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})
export class AutresInformationsComponent {
  
  infoForm: FormGroup;

  today: Date = new Date();
  constructor(private router: Router,
  private formBuilder: FormBuilder) {
  this.infoForm = this.formBuilder.group({
  type_particulier: ['', Validators.required],
  profession: ['', Validators.required],
  Type_piece: ['', Validators.required],
  numero_piece: ['', Validators.required],
  date_expiration: ['', Validators.required],
  photo_piece: ['', Validators.required],
  code_parrainage: ['']
  });
}  

  Retour(){
    this.router.navigate(['/dash/adresse']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
  Suivant(){
    this.router.navigate(['/dash/offres-et-domicialisation']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
}
