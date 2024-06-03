import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;



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

    // Initialize tooltips
    $(function () {
      $('[data-toggle="tooltip"]').tooltip({
        placement: 'left',
        customElements :'custom-class'
      })
    });
        
  }

  getCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }
  
}
