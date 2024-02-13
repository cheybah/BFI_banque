import { Component, Input } from '@angular/core';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-welcome-client',
  templateUrl: './welcome-client.component.html',
  styleUrls: ['./welcome-client.component.css']
})
export class WelcomeClientComponent {
	data: string[] = [];

  constructor(
    private axiosService : AxiosService 
  ){}



  ngOnInit(): void {
    this.axiosService.request(
        "GET",
        "/messages",
        {}).then(
        (response) => {
            this.data = response.data;
        }).catch(
        (error) => {
            if (error.response.status === 401) {
                this.axiosService.setAuthToken(null);
            } else {
                this.data = error.response.code;
            }

        }
    );
  }
}
