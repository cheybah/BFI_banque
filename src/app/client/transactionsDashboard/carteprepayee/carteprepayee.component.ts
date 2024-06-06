import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-carteprepayee',
  templateUrl: './carteprepayee.component.html',
  styleUrls: ['./carteprepayee.component.css']
})
export class CarteprepayeeComponent {
  constructor(private router: Router,private pageTitleService:PageTitleService
   ) {

  }
  GoToRechargeMyCard(): void {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire'])
  }
  GoToRechargeCardTiers(): void {
    this.router.navigate(['transactions/virement/autre-contact/intrabancaire'])
  }
  ngOnInit(): void {
    this.pageTitleService.changePageTitle('Carte Prepayée');

  }
}
