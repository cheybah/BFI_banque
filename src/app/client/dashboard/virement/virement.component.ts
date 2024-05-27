import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent {
  constructor(private router: Router) { }
  transfer = {
    account: null,
    accountToCredit: null,
    amount: null,
    transfReason: '',
  };

  successOperationMyAccount = false;
  verifpassword = false;
  isMobile = false;
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
