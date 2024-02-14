import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  isDropdownOpen: boolean = false;
  selectedLanguage: string = 'fr'; // Default language is French


  constructor(private translateService: TranslateService) {}

  toggleDropdown(event: MouseEvent) {
    event.preventDefault(); // Prevent default behavior of link click
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  changeLanguage(lang: string) {
    this.translateService.use(lang);
    this.selectedLanguage = lang; // Update the selected language

  }
}
