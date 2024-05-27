import { Component, OnInit } from '@angular/core';
import { sidebar } from './sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-nav',
  templateUrl: './transaction-nav.component.html',
  styleUrls: ['./transaction-nav.component.css'],
})
export class TransactionNavComponent implements OnInit {

  nav = sidebar;

  activeItemIndex: number = 0;

  constructor(public router: Router) {
    console.log('TransactionNavComponent initialized');
  }

  ngOnInit() {
    const storedIndex = localStorage.getItem('activeItemIndex');
    if (storedIndex !== null) {
      this.activeItemIndex = parseInt(storedIndex, 10);
      this.nav.forEach((item, i) => {
        item.isActive = i === this.activeItemIndex;
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
    localStorage.setItem('activeItemIndex', index.toString());
    this.activeItemIndex = index;

    if (this.nav[index].link) {
      this.router.navigate([this.nav[index].link]);
    }
  }
  navigateTo(link: string): void {
    if (link) {
      this.router.navigate([link]);
    }
  }
}
