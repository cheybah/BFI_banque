import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { navproData } from '../../dashboard/sidenav/nav-data';


@Component({
  selector: 'app-mot-de-passe-entreprise',
  templateUrl: './mot-de-passe-entreprise.component.html',
  styleUrls: ['./mot-de-passe-entreprise.component.css']
})
export class MotDePasseEntrepriseComponent {

  authForm: FormGroup;
  navData = navproData;


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService){
      this.authForm = this.formBuilder.group({
      
        confirmMotDePasse: ['', [Validators.required]],
        motDePasse: ['', [Validators.required]],
        reponse1: ['', [Validators.required]],
        reponse2: ['', [Validators.required]],
      })
    }

    Suivant(currentRoute: string): void{
      // Get the temporary data from the first form
      const temporaryData = this.authService.getTemporaryRegisterData();
      console.log('Temporary data:', temporaryData); // Log the temporary data for debugging
      
      // Check if temporary data is available
      if (temporaryData) {
        // Concatenate the JSON object from the second form with the one from the temporary storage
        const combinedData = { ...temporaryData, ...this.authForm.value };
        console.log('Combined data:', combinedData); // Log the combined data for debugging
        
        // Store the combined data in the temporary storage
        this.authService.setTemporaryCombinedData(combinedData);
        console.log('Temporary combined data stored:', combinedData); // Log the stored combined data for debugging

    
        // Navigate to the next step
        this.router.navigate(['/professionnel/validation-entreprise']);
      } else {
        console.error('Temporary data not found.');
        // Handle missing temporary data
      }
    
      const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
        this.navData[currentIndex].visited = true;
        const nextComponent = this.navData[currentIndex ].routeLink;
        this.router.navigate(['/professionnel/' + nextComponent]);
      

    }
}