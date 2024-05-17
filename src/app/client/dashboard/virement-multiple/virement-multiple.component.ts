import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virement-multiple',
  templateUrl: './virement-multiple.component.html',
  styleUrls: ['./virement-multiple.component.css']
})
export class VirementMultipleComponent {
  constructor(private router:Router){}
  GoToNextStepBamboo() {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire']);
  }
  GoToNextStepAutre() {
    this.router.navigate(['transactions/virement/autre-contact/interbancaire']);
  }
}
