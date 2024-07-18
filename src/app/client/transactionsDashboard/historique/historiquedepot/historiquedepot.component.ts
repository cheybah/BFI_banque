import { Component } from '@angular/core';
import { Depot } from 'src/app/home/services/Depot';
import { VirementService } from 'src/app/home/services/VirementService';

@Component({
  selector: 'app-historiquedepot',
  templateUrl: './historiquedepot.component.html',
  styleUrls: ['./historiquedepot.component.css']
})
export class HistoriquedepotComponent {
  depots: Depot[] = [];

  constructor(private virementService: VirementService) { }

  ngOnInit(): void {
    this.fetchdepts();
  }

  fetchdepts() {
    this.virementService.getDepot()
      .subscribe(
        (data) => {
          this.depots = data;
        },
        (error) => {
          console.error('Error fetching depots', error);
        }
      );
}
}