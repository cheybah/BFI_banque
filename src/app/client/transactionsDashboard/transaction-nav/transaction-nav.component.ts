import { Component } from '@angular/core';
import { sidebar } from './sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-nav',
  templateUrl: './transaction-nav.component.html',
  styleUrls: ['./transaction-nav.component.css'],
})
export class TransactionNavComponent {

  nav = sidebar;

  activeItemIndex: number = 0; // Démarre par le premier élément
 
  constructor(private router: Router) {}

  // Définit l'élément actif en fonction de l'index
  setActiveItem(index: number): void {
    // Désactive tous les éléments du menu
    this.nav.forEach((item, i) => {
      item.isActive = i === index; // Seul l'élément correspondant à l'index devient actif
    });

    // Met à jour l'indice de l'élément actif
    this.activeItemIndex = index;

    // Navigue vers le lien de l'élément actif (facultatif)
    if (this.nav[index].link) {
      this.router.navigate([this.nav[index].link]);
    }
  }
}
