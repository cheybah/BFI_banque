import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transactionsdash',
  templateUrl: './transactionsdash.component.html',
  styleUrls: ['./transactionsdash.component.css']
})

export class TransactionsdashComponent {
  constructor( private router:Router){}
  goToExtrait(): void {
    this.router.navigate(['/transactions-dashboard/extrait']);
  }
  GoToContacts(){
    this.router.navigate(['/transactions-dashboard/my-contacts']);
  }
}