import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mot-de-passe',
  templateUrl: './mot-de-passe.component.html',
  styleUrls: ['./mot-de-passe.component.css']
})
export class MotDePasseComponent {

  constructor(private router: Router){}

  Suivant() {
    this.router.navigate(['/dash/validation']);
  }

}
