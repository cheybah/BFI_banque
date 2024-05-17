import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interbancaire',
  templateUrl: './interbancaire.component.html',
  styleUrls: ['./interbancaire.component.css']
})
export class InterbancaireComponent {
  successOperationMyAccount: boolean = false;
  constructor(private router: Router) { }
 
  GoToNextStepBamboo() {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire']);
  }
  GoToNextStepAutre() {
    this.router.navigate([]);
  }
}
