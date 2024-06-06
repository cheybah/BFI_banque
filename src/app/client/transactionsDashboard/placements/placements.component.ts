import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/services/PageTitleService';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent {
  constructor(private pageTitleService:PageTitleService){}
  ngOnInit(): void {
    this.pageTitleService.changePageTitle('Placement');

  }
}
