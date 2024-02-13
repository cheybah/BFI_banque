import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface PaysCoordonnees {
  [pays: string]: { lat: number, lng: number };
}

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  paysCoordonnees: PaysCoordonnees = {
    // Exemple de coordonnées pour quelques pays
    'France': { lat: 46.603354, lng: 1.888334 },
    'Espagne': { lat: 40.463669, lng: -3.74922 },
    // Ajoutez d'autres pays avec leurs coordonnées
  };

  addMarker(event: google.maps.MapMouseEvent) {
    if(event.latLng != null) {
      const clickedCoordinates = event.latLng.toJSON();
      this.markerPositions.push(clickedCoordinates);
      const pays = this.getCountryName(clickedCoordinates);
      if (pays) {
        this.fillFormWithCountry(pays);
      }
      console.log(event);
    }
  }

  getCountryName(coordinates: google.maps.LatLngLiteral): string | null {
    for (const [pays, coordonnees] of Object.entries(this.paysCoordonnees)) {
      if (coordonnees.lat === coordinates.lat && coordonnees.lng === coordinates.lng) {
        return pays;
      }
    }
    return null;
  }

  fillFormWithCountry(pays: string) {
    // Remplissez le formulaire avec le nom du pays
    // (Vous pouvez remplir d'autres champs du formulaire si nécessaire)
    const villeInput = document.getElementById('ville') as HTMLInputElement;
    if (villeInput) {
      villeInput.value = pays;
    }
  }
  Retour(){
      this.router.navigate(['/dash/informations-personelles']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
  Suivant(){
    this.router.navigate(['/dash/autres-informations']); // Replace '/adresse' with the actual route path of your "Adresse" component
  }
}
