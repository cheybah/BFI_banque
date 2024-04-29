import { Component, ViewChild, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../../dashboard/models/Address';
import { AdresseService } from '../../../services/adresse.service';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { NgForm } from '@angular/forms';
import { navproData } from '../../dashboard/sidenav/nav-data';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-adresse-entreprise',
  templateUrl: './adresse-entreprise.component.html',
  styleUrls: ['./adresse-entreprise.component.css']
})
export class AdresseEntrepriseComponent {

  navData = navproData;
  @ViewChild('addressForm') addressForm!: NgForm;

  address: Address = { country: '', city: '', neighbourhood: '', zipCode: '' }; // Initialize address object

  private map: any;
  center: { lat: number, lng: number } = { lat: 24, lng: 12 };
  zoom: number = 3;
  markerOptions: any = { draggable: false };
  markerPositions: { lat: number, lng: number }[] = [];
  locationIcon = L.icon({
    iconUrl: './assets/img/icons/location-icon.webp',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
  });
 
  constructor(private router: Router,
    private adresseService: AdresseService,   
    private translate: TranslateService
  ) {    this.translate.setDefaultLang('fr');
}


  ngOnInit(): void {
      const storedAddressData = this.adresseService.getTemporaryAddressData();
    if (storedAddressData) {
      this.address = storedAddressData;
    }
    this.initMap();
  }

  saveAddress(form: NgForm): void {
    const formData = form.value; 
    console.log('Temporary form data:', formData);
  
    // Instead of directly saving to backend, store in temporary storage
    this.adresseService.setTemporaryAddressData(formData);
  
    // Navigate to the next step
    this.router.navigate(['/professionnel/autres-informations-entreprise']);
  }
 

  async locateCountry(): Promise<void> {
    const countryInput = document.getElementById('country') as HTMLInputElement;
    const countrySaisi = countryInput.value.trim();
    console.log("country saisi:", countrySaisi);

    if (countrySaisi) {
        const coordonnees = await this.getCountryCoordinates(countrySaisi);
        console.log("Coordonnées du country:", coordonnees);
        
        if (coordonnees) {
            const newCenter = L.latLng(coordonnees.lat, coordonnees.lon);
            this.map.setView(newCenter, 6); // Zoom and center the map
        } else {
            console.log("Coordonnées non trouvées pour le pays saisi");
        }
    }  
}
initMap(): void {
  this.map = L.map('map', {
    center: [this.center.lat, this.center.lng],
    attributionControl: false,
    zoom: this.zoom
  });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
  });

  tiles.addTo(this.map);

  this.map.on('click', (event: any) => {
    this.addMarker(event);
  });
}

async addMarker(event: any): Promise<void> {
  if (event.latlng != null) {
    const clickedCoordinates = event.latlng;
    console.log("Clicked Coordinates:", clickedCoordinates);
    this.markerPositions.push(clickedCoordinates);

    this.fillCityFromCoordinates(clickedCoordinates);

    L.marker(clickedCoordinates, { icon: this.locationIcon }).addTo(this.map);
  }
}
fillCityFromCoordinates(coordinates: { lat: number, lng: number }): void {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lng}&zoom=10&addressdetails=1`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.address) {
        const cityInput = document.getElementById('city') as HTMLInputElement;
        if (cityInput) {
          const city = data.address.city || data.address.town || data.address.village || '';
          cityInput.value = city;
        }
      }
    })
    .catch(error => {
      console.error('Error while retrieving city name from coordinates:', error);
    });
}

async getCountryName(coordinates: { lat: number, lng: number }): Promise<string | null> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lng}&zoom=10&addressdetails=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.address && data.address.country) {
      return data.address.country;
    } else {
      console.error('Pays non trouvé pour les coordonnées:', coordinates);
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du nom du pays:', error);
    return null;
  }
}

fillFormWithCountry(country: string): void {
    console.log("Filling form with country:", country);
    const cityInput = document.getElementById('city') as HTMLInputElement;
    if (cityInput) {
        cityInput.value = country;
    }
}

async getCountryCoordinates(country: string): Promise<{ lat: number, lon: number } | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(country)}`;
  
  try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data && data.length > 0) {
          return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
      } else {
          console.error('Aucune donnée de géocodage pour le pays:', country);
          return null;
      }
  } catch (error) {
      console.error('Erreur lors de la récupération des coordonnées du pays:', error);
      return null;
  }
}

Retour(currentRoute: string): void {
  const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
  if (currentIndex >= 0) {
    this.navData[currentIndex].visited = false;
  }
  window.history.back();
}

Suivant(currentRoute: string): void{
  if (this.addressForm && this.addressForm.valid) {
    this.saveAddress(this.addressForm);
  } else {
    console.error('Form is invalid or addressForm is not initialized.');
  }
  const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
  if (currentIndex < this.navData.length - 1) {
    this.navData[currentIndex].visited = true;
    const nextComponent = this.navData[currentIndex ].routeLink;
    this.router.navigate(['/professionnel/' + nextComponent]);
  }
}

}
