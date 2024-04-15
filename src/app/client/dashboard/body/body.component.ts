import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { DashMsgService } from 'src/app/services/dash-msg.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';





@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  animations: [ //angular animations for body content
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 2, transform: 'translateY(-20px)' })),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px)' }), // Start off-screen
        animate('700ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })), // Slide in from left
      ]),
    ]),
  ],
})

export class BodyComponent implements OnInit {

  @Input() collapsed=false;
  @Input() screenWidth=0;


  constructor(public dashmsgService: DashMsgService, private router: Router,
    private translate: TranslateService) { 
      this.translate.setDefaultLang('fr');
    }

  ngOnInit(): void {
    // Show the message when the component is initialized
    this.dashmsgService.showMessage = true;

    // Subscribe to router events to hide/show message based on route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateMessageVisibility(event.url);
      }
    });
  }

  updateMessageVisibility(url: string): void {
    // Check if the current route is /dash or its child routes
    if (url === '/dash') {
      this.dashmsgService.showMessage = true;
    } else {
      this.dashmsgService.showMessage = false;
    }
  }

  getBodyClass():string{
    let styleClass='';
    if(this.collapsed && this.screenWidth >768 )
    {
      styleClass='body-trimmed';
    }
    else if(this.collapsed && this.screenWidth<=768 && this.screenWidth>0)
    {
      styleClass='body-md-screeen';
    }
    return styleClass;
  }

  Suivant(){
    let nextRoute = '';
    if (this.router.url === '/dash') {
      nextRoute = '/dash/informations-personelles';
    } else if (this.router.url === '/professionnel') {
      nextRoute = '/professionnel/informations-du-mandataire';
    }
    this.router.navigate([nextRoute]);
  }
}
