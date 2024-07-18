import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent {
  constructor(
    private router: Router,
    private pageTitleService: PageTitleService
  ) {this.pageTitleService.changePageTitle('Placement'); }
  

}
