import { Component, ChangeDetectorRef  } from '@angular/core';
import { SidebarItem } from './SidebarItem'; 

@Component({
  selector: 'app-transaction-nav',
  templateUrl: './transaction-nav.component.html',
  styleUrls: ['./transaction-nav.component.css']
})
export class TransactionNavComponent {

  constructor(private cdr: ChangeDetectorRef) {}


 // Define the sidebar items
 sidebarItems: SidebarItem[] = [
  {
    title: 'Tableau de board',
    icon: 'bi bi-shop', // Bootstrap icon
    link: 'transactions-dashboard', // Optional link
    isActive: true, // Indicate active item
    isSubmenuVisible: false,

  },
  {
    title: 'Comptes',
    icon: 'bi bi-person-vcard',
    link: '/accounts/create',
    isActive: false, // Set all other items as inactive by default
    submenu: [
      { title: 'Sub Item 1', icon: 'bi bi-file-earmark', link: '#' },
      { title: 'Sub Item 2', icon: 'bi bi-folder', link: '#' },
    ],
    isSubmenuVisible: false, // Submenu initially hidden
  },
  {
    title: 'Transactions',
    icon: 'bi bi-credit-card',
    link: '/transactions',
    isActive: false,
  },
  {
    title: 'Transfert Rapide',
    icon: 'bi bi-arrow-left-right',
    link: ' javascript:;',
    isActive: false,
  },
  {
    title: 'Historique',
    icon: 'bi bi-clock-history',
    link: 'javascript:;',
    isActive: false,
  },
  {
    title: 'Validations',
    icon: 'bi bi-check-all',
    link: 'javascript:;',
    isActive: false,
  },
  {
    title: 'Administration',
    icon: 'bi bi-building',
    link: 'javascript:;',
    isActive: false,
  },
  {
    title: 'Service Client',
    icon: 'bi bi-headset',
    link: 'javascript:;',
    isActive: false,
  },
  {
    title: 'Configurations',
    icon: 'bi bi-gear',
    link: 'javascript:;',
    isActive: false,
  },
];

  // Store the current active item
  activeItem: SidebarItem = this.sidebarItems[0]; // Default to the first item

  toggleSubmenu(item: SidebarItem): void {
    console.log('toggleSubmenu');
    item.isSubmenuVisible = !item.isSubmenuVisible; // Toggle visibility
    console.log('toggleSubmenu here');
    this.setActiveItem(item);
  }

  // Method to update the active item
  setActiveItem(item: SidebarItem): void {
    // Set isActive to false for all items
    this.sidebarItems.forEach(i => i.isActive = false);
  
    // Set isActive to true for the clicked item
    item.isActive = true;
  }
  
}
