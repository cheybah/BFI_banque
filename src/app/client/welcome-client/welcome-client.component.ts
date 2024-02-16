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
  animationDuration: number = 6500; // Duration of the animation in milliseconds (7 seconds)


  options: AnimationOptions = {    
    path: '/assets/lottie/hola-animation.json' 
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
