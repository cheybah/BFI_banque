import { Component } from '@angular/core';
import { VirementService } from 'src/app/home/services/VirementService';
import { Virement } from 'src/app/home/services/virement';

@Component({
  selector: 'app-historiquevirement',
  templateUrl: './historiquevirement.component.html',
  styleUrls: ['./historiquevirement.component.css']
})
export class HistoriquevirementComponent {
  virements: Virement[] = [];

  constructor(private virementService: VirementService) { }

  ngOnInit(): void {
    this.fetchVirements();
  }

  fetchVirements() {
    this.virementService.getVirements()
      .subscribe(
        (data) => {
          this.virements = data;
        },
        (error) => {
          console.error('Error fetching virements', error);
        }
      );
  }
}
