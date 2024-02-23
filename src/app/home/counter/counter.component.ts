import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterData: any = {};

  constructor(
    private router: Router,
    private axiosService: AxiosService
  ) {}

  ngOnInit(): void {
    this.fetchCounterData();
  }

 
  fetchCounterData(): void {
    this.axiosService.request(
      "GET",
      "/counter",
      null // Vous n'avez pas besoin de données pour une requête GET
    ).then((response: any) => {
      this.counterData = response.data;
    }).catch((error: any) => {
      console.error("Error fetching counter data:", error);
    });
  }
}
