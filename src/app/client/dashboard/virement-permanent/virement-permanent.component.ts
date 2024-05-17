import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virement-permanent',
  templateUrl: './virement-permanent.component.html',
  styleUrls: ['./virement-permanent.component.css']
})
export class VirementPermanentComponent {
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
  }
  GoToNextStepAutre() {
  }
}
