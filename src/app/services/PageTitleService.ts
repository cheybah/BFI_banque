// page-title.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private pageTitle = new BehaviorSubject<string>('Page Name');
  private pagepageTitle = new BehaviorSubject<string>('Page Name');

  currentPageTitle = this.pageTitle.asObservable();
  currentPagePageTitle = this.pagepageTitle.asObservable();

  constructor() { }

  changePageTitle(title: string) {
    this.pageTitle.next(title);
  }
  changePagePageTitle(title: string) {
    this.pagepageTitle.next(title);
  }
}
