import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



interface SidenavToggle{
  screenWidth :number;
  collapsed: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
  } 
  
  title='sidenav';

  isSideNavCollapsed=false;
  screenWidth=0;
  isDarkMode: boolean | undefined;


  onToggleSideNav(data :SidenavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
  
}
