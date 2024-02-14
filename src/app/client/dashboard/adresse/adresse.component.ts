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
    'Afghanistan': { lat: 33.93911, lng: 67.709953 },
    'Albanie': { lat: 41.153332, lng: 20.168331 },
    'Algérie': { lat: 28.033886, lng: 1.659626 },
    'Andorre': { lat: 42.546245, lng: 1.601554 },
    'Angola': { lat: -11.202692, lng: 17.873887 },
    'Antigua-et-Barbuda': { lat: 17.060816, lng: -61.796428 },
    'Argentine': { lat: -38.416097, lng: -63.616672 },
    'Arménie': { lat: 40.069099, lng: 45.038189 },
    'Australie': { lat: -25.274398, lng: 133.775136 },
    'Autriche': { lat: 47.516231, lng: 14.550072 },
    'Azerbaïdjan': { lat: 40.143105, lng: 47.576927 },
    'Bahamas': { lat: 25.03428, lng: -77.39628 },
    'Bahreïn': { lat: 25.930414, lng: 50.637772 },
    'Bangladesh': { lat: 23.684994, lng: 90.356331 },
    'Barbade': { lat: 13.193887, lng: -59.543198 },
    'Biélorussie': { lat: 53.709807, lng: 27.953389 },
    'Belgique': { lat: 50.503887, lng: 4.469936 },
    'Belize': { lat: 17.189877, lng: -88.49765 },
    'Bénin': { lat: 9.30769, lng: 2.315834 },
    'Bhoutan': { lat: 27.514162, lng: 90.433601 },
    'Bolivie': { lat: -16.290154, lng: -63.588653 },
    'Bosnie-Herzégovine': { lat: 43.915886, lng: 17.679076 },
    'Botswana': { lat: -22.328474, lng: 24.684866 },
    'Brésil': { lat: -14.235004, lng: -51.92528 },
    'Brunei': { lat: 4.535277, lng: 114.727669 },
    'Bulgarie': { lat: 42.733883, lng: 25.48583 },
    'Burkina Faso': { lat: 12.238333, lng: -1.561593 },
    'Burundi': { lat: -3.373056, lng: 29.918886 },
    'Cabo Verde': { lat: 16.002082, lng: -24.013197 },
    'Cambodge': { lat: 12.565679, lng: 104.990963 },
    'Cameroun': { lat: 7.369722, lng: 12.354722 },
    'Canada': { lat: 56.130366, lng: -106.346771 },
    'République centrafricaine': { lat: 6.611111, lng: 20.939444 },
    'Tchad': { lat: 15.454166, lng: 18.732207 },
    'Chili': { lat: -35.675147, lng: -71.542969 },
    'Chine': { lat: 35.86166, lng: 104.195397 },
    'Colombie': { lat: 4.570868, lng: -74.297333 },
    'Comores': { lat: -11.875001, lng: 43.872219 },
    'Congo (Brazzaville)': { lat: -0.228021, lng: 15.827659 },
    'Costa Rica': { lat: 9.748917, lng: -83.753428 },
    'Croatie': { lat: 45.1, lng: 15.2 },
    'Cuba': { lat: 21.521757, lng: -77.781167 },
    'Chypre': { lat: 35.126413, lng: 33.429859 },
    'République tchèque': { lat: 49.817492, lng: 15.472962 },
    'Côte d\'Ivoire': { lat: 7.539989, lng: -5.54708 },
    'Danemark': { lat: 56.26392, lng: 9.501785 },
    'Djibouti': { lat: 11.825138, lng: 42.590275 },
    'Dominique': { lat: 15.414999, lng: -61.370976 },
    'République dominicaine': { lat: 18.735693, lng: -70.162651 },
    'Équateur': { lat: -1.831239, lng: -78.183406 },
    'Égypte': { lat: 26.820553, lng: 30.802498 },
    'Salvador': { lat: 13.794185, lng: -88.89653 },
    'Guinée équatoriale': { lat: 1.650801, lng: 10.267895 },
    'Érythrée': { lat: 15.179384, lng: 39.782334 },
    'Estonie': { lat: 58.595272, lng: 25.013607 },
    'Eswatini': { lat: -26.522503, lng: 31.465866 },
    'Éthiopie': { lat: 9.145, lng: 40.489673 },
    'Fidji': { lat: -16.578193, lng: 179.414413 },
    'Finlande': { lat: 61.92411, lng: 25.748151 },
    'France': { lat: 46.603354, lng: 1.888334 },
    'Gabon': { lat: -0.803689, lng: 11.609444 },
    'Gambie': { lat: 13.443182, lng: -15.310139 },
    'Géorgie': { lat: 42.315407, lng: 43.356892 },
    'Allemagne': { lat: 51.165691, lng: 10.451526 },
    'Ghana': { lat: 7.946527, lng: -1.023194 },
    'Grèce': { lat: 39.074208, lng: 21.824312 },
    'Grenade': { lat: 12.262776, lng: -61.604171 },
    'Palestine': { lat: 31.952162, lng: 35.233154 },
    'Panama': { lat: 8.537981, lng: -80.782127 },
    'Papouasie-Nouvelle-Guinée': { lat: -6.314993, lng: 143.95555 },
    'Paraguay': { lat: -23.442503, lng: -58.443832 },
    'Pérou': { lat: -9.189967, lng: -75.015152 },
    'Philippines': { lat: 12.879721, lng: 121.774017 },
    'Pologne': { lat: 51.919438, lng: 19.145136 },
    'Portugal': { lat: 39.399872, lng: -8.224454 },
    'Qatar': { lat: 25.354826, lng: 51.183884 },
    'Réunion': { lat: -21.115141, lng: 55.536384 },
    'Roumanie': { lat: 45.943161, lng: 24.96676 },
    'Russie': { lat: 61.52401, lng: 105.318756 },
    'Rwanda': { lat: -1.940278, lng: 29.873888 },
    'Saint-Kitts-et-Nevis': { lat: 17.357822, lng: -62.782998 },
    'Sainte-Lucie': { lat: 13.909444, lng: -60.978893 },
    'Saint-Vincent-et-les Grenadines': { lat: 12.984305, lng: -61.287228 },
    'Samoa': { lat: -13.759029, lng: -172.104629 },
    'Saint-Marin': { lat: 43.94236, lng: 12.457777 },
    'Sao Tomé-et-Principe': { lat: 0.18636, lng: 6.613081 },
    'Arabie Saoudite': { lat: 23.885942, lng: 45.079162 },
    'Sénégal': { lat: 14.497401, lng: -14.452362 },
    'Serbie': { lat: 44.016521, lng: 21.005859 },
    'Seychelles': { lat: -4.679574, lng: 55.491977 },
    'Sierra Leone': { lat: 8.460555, lng: -11.779889 },
    'Singapour': { lat: 1.352083, lng: 103.819836 },
    'Slovaquie': { lat: 48.669026, lng: 19.699024 },
    'Slovénie': { lat: 46.151241, lng: 14.995463 },
    'Îles Salomon': { lat: -9.64571, lng: 160.156194 },
    'Somalie': { lat: 5.152149, lng: 46.199616 },
    'Afrique du Sud': { lat: -30.559482, lng: 22.937506 },
    'Soudan du Sud': { lat: 6.876991, lng: 31.306978 },
    'Espagne': { lat: 40.463669, lng: -3.74922 },
    'Sri Lanka': { lat: 7.873054, lng: 80.771797 },
    'Soudan': { lat: 12.862807, lng: 30.217636 },
    'Suriname': { lat: 3.919305, lng: -56.027783 },
    'Suède': { lat: 60.128161, lng: 18.643501 },
    'Suisse': { lat: 46.818188, lng: 8.227512 },
    'Syrie': { lat: 34.802075, lng: 38.996815 },
    'Taïwan': { lat: 23.69781, lng: 120.960515 },
    'Tadjikistan': { lat: 38.861034, lng: 71.276093 },
    'Tanzanie': { lat: -6.369028, lng: 34.888822 },
    'Thaïlande': { lat: 15.870032, lng: 100.992541 },
    'Timor oriental': { lat: -8.874217, lng: 125.727539 },
    'Togo': { lat: 8.619543, lng: 0.824782 },
    'Tonga': { lat: -21.178986, lng: -175.198242 },
    'Trinité-et-Tobago': { lat: 10.691803, lng: -61.222503 },
    'Tunisie': { lat: 33.886917, lng: 9.537499 },
    'Turquie': { lat: 38.963745, lng: 35.243322 },
    'Turkménistan': { lat: 38.969719, lng: 59.556278 },
    'Tuvalu': { lat: -7.109535, lng: 177.64933 },
    'Ouganda': { lat: 1.373333, lng: 32.290275 },
    'Ukraine': { lat: 48.379433, lng: 31.16558 },
    'Émirats arabes unis': { lat: 23.424076, lng: 53.847818 },
    'Royaume-Uni': { lat: 55.378051, lng: -3.435973 },
    'États-Unis': { lat: 37.09024, lng: -95.712891 },
    'Uruguay': { lat: -32.522779, lng: -55.765835 },
    'Ouzbékistan': { lat: 41.377491, lng: 64.585262 },
    'Vanuatu': { lat: -15.376706, lng: 166.959158 },
    'Cité du Vatican': { lat: 41.902916, lng: 12.453389 },
    'Venezuela': { lat: 6.42375, lng: -66.58973 },
    'Vietnam': { lat: 14.058324, lng: 108.277199 },
    'Yémen': { lat: 15.552727, lng: 48.516388 },
    'Zambie': { lat: -13.133897, lng: 27.849332 },
    'Zimbabwe': { lat: -19.015438, lng: 29.154857 }
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
  locateCountry() {
    const paysInput = document.getElementById('pays') as HTMLInputElement;
    const paysSaisi = paysInput.value.trim();
    if (paysSaisi) {
      const coordonnees = this.paysCoordonnees[paysSaisi];
      if (coordonnees) {
        this.center = { lat: coordonnees.lat, lng: coordonnees.lng };
        this.zoom = 6; // Zoom sur le pays sélectionné
      } else {
        console.log("Coordonnées non trouvées pour le pays saisi");
      }
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
