import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { navbarData } from '../sidenav/nav-data';



@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent {

  authForm: FormGroup;
  navData = navbarData;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService){
      this.authForm = this.formBuilder.group({
        login: [null, Validators.required],
        password: ['', [Validators.required]],
      });
    }

    Suivant(currentRoute: string): void{
      // Get the temporary data from the first form
      const temporaryData = this.authService.getTemporaryData();
      console.log('Temporary data:', temporaryData); // Log the temporary data for debugging
    
      // Check if temporary data is available
      if (temporaryData) {
        // Concatenate the JSON object from the second form with the one from the temporary storage
        const combinedData = { ...temporaryData, ...this.authForm.value };
        console.log('Combined data:', combinedData); // Log the combined data for debugging
    
        // Send the combined data to the backend for registration
        this.authService.register(combinedData).subscribe(
          response => {
            console.log('Account saved successfully:', response);
            this.router.navigate(['/dash/validation']);
          },
          error => {
            console.error('Error occurred while saving account:', error);
            // Handle error appropriately
          }
        );
      } else {
        console.error('Temporary data not found.');
        // Handle missing temporary data
      }
    
      const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
        this.navData[currentIndex].visited = true;
        const nextComponent = this.navData[currentIndex ].routeLink;
        this.router.navigate(['/dash/' + nextComponent]);
      

    }
    

}
