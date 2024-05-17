import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carteprepayee',
  templateUrl: './carteprepayee.component.html',
  styleUrls: ['./carteprepayee.component.css']
})
export class CarteprepayeeComponent {
  constructor(private router: Router) {

  }
  GoToRechargeMyCard(): void {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire'])
  }
  GoToRechargeCardTiers(): void {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire'])
  }
}
