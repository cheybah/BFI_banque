import { Component } from '@angular/core';
import { ImageComparisonService } from '../coparaison';

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent {
  selectedFile: File | null = null;
  result: boolean | null = null;

  constructor(private imageComparisonService: ImageComparisonService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async compareImages() {
    if (this.selectedFile) {
      const referenceImage = '../assets/img/cin/ss.jpeg'; 
      try {
        this.result = await this.imageComparisonService.compareImages(this.selectedFile, referenceImage);
      } catch (error) {
        console.error('Erreur lors de la comparaison des images :', error);
      }
    }
  }
}
