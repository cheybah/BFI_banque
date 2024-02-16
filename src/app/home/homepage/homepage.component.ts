import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [ //angular animations
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }), // Start off-screen
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })), // Slide in from left
      ]),
    ]),
  ],
})

export class HomepageComponent implements OnInit{

  constructor(private translate: TranslateService){
    this.translate.setDefaultLang('fr');  //the default site's lang
  }

  ngOnInit() {
  }

  scrollToTop(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
}
