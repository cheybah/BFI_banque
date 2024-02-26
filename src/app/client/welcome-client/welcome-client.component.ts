import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AxiosService } from 'src/app/services/axios.service';

@Component({
  selector: 'app-welcome-client',
  templateUrl: './welcome-client.component.html',
  styleUrls: ['./welcome-client.component.css']
})
export class WelcomeClientComponent {
	data: string[] = [];
  showAnimation: boolean = true;
  animationTimer: any; // Timer to give the animation a deadline to complete
  animationDuration: number = 4100; // Duration of the animation in milliseconds


  options: AnimationOptions = {    
    path: '/assets/lottie/welcome2-aniamtion.json' 
  };  

  constructor(  
    private axiosService : AxiosService 
  ){}

  ngOnDestroy(): void {
    // Clean up resources when the component is destroyed
    this.stopAnimationTimer();
  }

  onAnimate(animationItem: AnimationItem): void {    
    // Start the animation timer when the animation begins
    this.startAnimationTimer();
  }

  startAnimationTimer(): void {
    // Set a timeout to hide the animation after the specified duration
    this.animationTimer = setTimeout(() => {
      this.showAnimation = false;
    }, this.animationDuration);
  }

  stopAnimationTimer(): void {
    // Clear the animation timer to avoid potential memory leaks
    clearTimeout(this.animationTimer);
  }


  ngOnInit(): void {
    this.axiosService.request(  //test the messagescontroller to see if the user is authenticated
        "GET",
        "/messages", //replace this with the correct endpoint
        {}).then(
        (response) => { //if the user is authenticated, the server will return the messages
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
