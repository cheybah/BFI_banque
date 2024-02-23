import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-updatedpassword',
  templateUrl: './updatedpassword.component.html',
  styleUrls: ['./updatedpassword.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class UpdatedpasswordComponent {
  currentYear!: number;

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }
}