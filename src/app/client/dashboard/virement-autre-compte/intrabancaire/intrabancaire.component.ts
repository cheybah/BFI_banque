import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intrabancaire',
  templateUrl: './intrabancaire.component.html',
  styleUrls: ['./intrabancaire.component.css']
})
export class IntrabancaireComponent {

  constructor(private router: Router) { }

  GoToMyContacts() {
    this.router.navigate(['transactions/virement/my-contacts']);
  }
  GoToAutreCompte() {
    this.router.navigate(['transactions/virement/autre-contact']);
  }
  GoToPermanent() {
    this.router.navigate(['transactions/virement/permanent']);
  }
  GoToMultipleContact() {
    this.router.navigate(['transactions/virement/multiple']);
  }
}
