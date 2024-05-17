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
    console.log('Initial active item index:', this.activeItemIndex);
  }
  
  ngOnInit() {
    console.log('TransactionNavComponent initialized');
  
    // Retrieve the stored active item index, if any
    const storedIndex = localStorage.getItem('activeItemIndex');
  
    if (storedIndex !== null) {
      this.activeItemIndex = parseInt(storedIndex, 10); // Convert to number
      this.nav.forEach((item, i) => {
        item.isActive = i === this.activeItemIndex;
      });
    } else {
      // Default to the first item if no stored index
      this.activeItemIndex = 0;
      this.nav[0].isActive = true;
    }
  
    console.log('Initial active item index:', this.activeItemIndex);
  }

  toggleExpanded(index: number): void {
    const item = this.nav[index];

    // Toggle expanded state for the item
    if (item.expanded !== undefined) {
      item.expanded = !item.expanded;
      return;
    }

    // If no expanded state, handle navigation
    this.setActiveItem(index);
  }


  setActiveItem(index: number): void {
    console.log(`Setting active item to index: ${index}`);
  
    // Update the active state and local storage
    this.nav.forEach((item, i) => {
      item.isActive = i === index;
    });
  
    localStorage.setItem('activeItemIndex', index.toString()); // Store in local storage
    this.activeItemIndex = index;
  
    if (this.nav[index].link) {
      console.log(`Navigating to: ${this.nav[index].link}`);
      this.router.navigate([this.nav[index].link]);
    }
  }
}
