import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie'; // Import Lottie types


@Component({
  selector: 'app-transactionsdash',
  templateUrl: './transactionsdash.component.html',
  styleUrls: ['./transactionsdash.component.css']
})

export class TransactionsdashComponent {

  constructor( private router:Router){}

  lottieOptions: AnimationOptions = {
    path: "/assets/lottie/dash-client.json", // Path to your Lottie JSON file
  };
  

  // Function to handle animation creation event
  animationCreated(animation: any) {
    console.log('Lottie animation created:', animation);
  }
  
  goToExtrait(): void {
    this.router.navigate(['/transactions-dashboard/extrait']);
  }
  GoToContacts(){
    this.router.navigate(['/transactions-dashboard/my-contacts']);
  }
}
