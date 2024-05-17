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

  GoToNextStepBamboo() {
  }
  GoToNextStepAutre() {
  }
}
