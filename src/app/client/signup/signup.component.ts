import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  currentYear!: number;

  constructor(private translate: TranslateService) {this.translate.setDefaultLang('fr');}


  ngOnInit(): void {
    this.getCurrentYear();
  }

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }
  
}
