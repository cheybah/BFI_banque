import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData, navproData } from './nav-data';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

interface SidenavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({ transform: 'rotate(0deg)', offset: '0' }),
          style({ transform: 'rotate(2turn)', offset: '1' })
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  activeItemIndex: number = 0; // Commencez à partir de la première étape
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;

  @Output() onToggleSideNav: EventEmitter<SidenavToggle> = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 900) {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }
  constructor(private router: Router) {} // Injectez le Router

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    // Vérifiez la route actuelle et affectez navData en conséquence
    if (this.router.url.startsWith('/professionnel')) {
      this.navData = navproData;
    }
  }


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
 // Fonction pour définir l'étape active
 setActiveItem(index: number): void {
  if (index <= this.activeItemIndex + 1) { // Vérifiez si l'utilisateur peut accéder à cette étape
    this.activeItemIndex = index;
  }
}

// Fonction pour vérifier si l'étape est accessible ou non
isAccessible(index: number): boolean {
  return index <= this.activeItemIndex;
}
}