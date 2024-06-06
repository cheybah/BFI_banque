import { Component, OnInit } from '@angular/core';
import { sidebarPP } from './sidebar';
import { Router } from '@angular/router';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-transaction-nav',
  templateUrl: './transaction-nav.component.html',
  styleUrls: ['./transaction-nav.component.css'],
})
export class TransactionNavComponent implements OnInit {

  nav = sidebarPP;
  activeItemIndex: number = 0;

  constructor(private pageTitleService: PageTitleService, public router: Router) {
    console.log('TransactionNavComponent initialized'); //ensure this works for state 0
  }

  ngOnInit() {
    const storedIndex = localStorage.getItem('activeItemIndex');
    if (storedIndex !== null) {
      this.activeItemIndex = parseInt(storedIndex, 10);
      this.nav.forEach((item, i) => {
        item.isActive = i === this.activeItemIndex;
        
        if(this.activeItemIndex==1){
          this.pageTitleService.changePagePageTitle('Comptes');
          
      
        }if(this.activeItemIndex==2){
          this.pageTitleService.changePagePageTitle('Transactions');
      
        }if(this.activeItemIndex==3){
          this.pageTitleService.changePagePageTitle('Transfert Rapide');
          this.pageTitleService.changePageTitle('');

        }if(this.activeItemIndex==5){
          this.pageTitleService.changePagePageTitle('Service Client');
      
        }if(this.activeItemIndex==6){
          this.pageTitleService.changePagePageTitle('Configuration');
          this.pageTitleService.changePageTitle('');

        }
      });
    } else {
      this.activeItemIndex = 0;
      this.nav[0].isActive = true;
    }
   
  }
  toggleExpanded(index: number): void {
    this.nav[index].expanded = !this.nav[index].expanded;
  }

  setActiveItem(index: number): void {
    
    this.nav.forEach((item, i) => {
      item.isActive = i === index;
      if (i !== index) {
        item.expanded = false;
      }
    });
    this.activeItemIndex = index;
    localStorage.setItem('activeItemIndex', index.toString()); // this to maintain the correct item activation
    if (this.nav[index].link) {
      this.router.navigate([this.nav[index].link]);
    }
  }
  navigateTo(link: string): void {
    if (link) {
      this.router.navigate([link]);
      console.log('we are here', link)
    }
  }

  
}
