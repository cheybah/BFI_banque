import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virement-autre-compte',
  templateUrl: './virement-autre-compte.component.html',
  styleUrls: ['./virement-autre-compte.component.css']
})
export class VirementAutreCompteComponent {
  successOperationMyAccount: boolean = false;
  constructor(private router: Router) { }
  GoToMyContacts() {
    this.router.navigate(['transactions/virement/my-contacts']);
  }
  GoToAutreCompte() {
    this.router.navigate(['transactions/virement/autre-contact']);
  }
  GoToPermanent() {
    this.router.navigate(['transactions/virement/multiple']);
  }
  GoToMultipleContact() {
    this.router.navigate(['transactions/virement/permanent']);
  }
  GoToNextStepBamboo() {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire']);
  }
  GoToNextStepAutre() {
    this.router.navigate(['transactions/virement/autre-contact/interbancaire']);
  }

}
