import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  page = "Page Name";
  pageTitle = 'Page Name';

  constructor(private router: Router,private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitleService.currentPageTitle.subscribe((title: string) => {
      this.page = title;
    });
   
      this.pageTitleService.currentPagePageTitle.subscribe((title :string)=> {
        this.pageTitle = title;
      });
  }
  logOut(): void {
    localStorage.clear;
    this.router.navigate(['/bfi/login']);
  }
}
