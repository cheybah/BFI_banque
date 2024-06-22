import { Component } from '@angular/core';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent {
  query: { choix?: number } = {};

  choixVersement(choice: number) {
    this.query.choix = choice;
  }
  getChoiceLabel(choice: number): string {
    switch (choice) {
      case 1:
        return 'En Agence';
      case 2:
        return 'Station native';
      case 3:
        return 'Via Mobile Money';
      case 4:
        return 'Via banque';
      default:
        return '';
    }
  }
  
}
