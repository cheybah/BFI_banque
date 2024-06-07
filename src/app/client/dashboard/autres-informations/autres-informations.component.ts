import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutresInformationsService } from '../../../services/autres-informations.service';
import { navbarData } from '../sidenav/nav-data';
import * as Tesseract from 'tesseract.js';
import { AuthService } from 'src/app/services/auth.service';

declare const cv: any;

@Component({
  selector: 'app-autres-informations',
  templateUrl: './autres-informations.component.html',
  styleUrls: ['./autres-informations.component.css']
})
export class AutresInformationsComponent implements OnInit {

  navData = navbarData;
  infoForm: FormGroup;
  today: Date = new Date();
  verificationResult: boolean | null = null;
  cvReady: boolean = false;
  modelImage: any;
  modelKeypoints: any;
  modelDescriptors: any;
  extractedCinNumber: string | null = null; // To store the extracted CIN number

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private autresInformationsService: AutresInformationsService,
            private authService:AuthService
        ) {

    this.infoForm = this.formBuilder.group({
      typeIndividual: ['', Validators.required],
      profession: ['', Validators.required],
      pieceType: ['', Validators.required],
      pieceNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      piecePhoto: ['', Validators.required],
      referralCode: ['']
    });
  }

  ngOnInit(): void {
    this.loadOpenCv();
    const storedAdditionalInfoData = this.autresInformationsService.getTemporaryAdditionalInfoData();
    if (storedAdditionalInfoData) {
      this.infoForm.patchValue(storedAdditionalInfoData);
    }
  }

  loadOpenCv(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/opencv.js';
    script.onload = () => {
      this.checkCvReady();
    };
    script.onerror = () => {
      console.error('Failed to load OpenCV script');
    };
    document.head.appendChild(script);
  }

  checkCvReady(): void {
    const checkInterval = setInterval(() => {
      if (cv && cv.Mat) {
        this.cvReady = true;
        clearInterval(checkInterval);
        console.log('OpenCV loaded successfully');
        this.loadModelImage();
      }
    }, 100);
  }

  loadModelImage(): void {
    const img = new Image();
    img.src = 'assets/img/cin/c1.jpeg';
    img.onload = () => {
      try {
        let modelImage = cv.imread(img);
        cv.cvtColor(modelImage, modelImage, cv.COLOR_RGBA2GRAY);
        const modelSize = new cv.Size(300, 200);
        cv.resize(modelImage, modelImage, modelSize, 0, 0, cv.INTER_AREA);
        const orb = new cv.ORB();
        this.modelKeypoints = new cv.KeyPointVector();
        this.modelDescriptors = new cv.Mat();
        orb.detectAndCompute(modelImage, new cv.Mat(), this.modelKeypoints, this.modelDescriptors);
        console.log('Model image loaded and processed successfully');
        this.modelImage = modelImage;
      } catch (error) {
        console.error('Error processing model image', error);
      }
    };
    img.onerror = () => {
      console.error('Failed to load model image');
    };
  }

  onFileChange(event: any): void {
    if (!this.cvReady || !this.modelImage) {
      console.error('OpenCV or model image is not loaded yet.');
      return;
    }
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imgElement = new Image();
        imgElement.src = e.target.result;
        imgElement.onload = () => {
          this.verifyCin(imgElement);
          this.extractCinNumber(imgElement);
        };
        imgElement.onerror = () => {
          console.error('Failed to load input image');
        };
      };
      reader.readAsDataURL(file);
    }
  }

  verifyCin(imgElement: HTMLImageElement): void {
    try {
      let src = cv.imread(imgElement);
      let gray = new cv.Mat();
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
      const modelSize = new cv.Size(300, 200);
      cv.resize(gray, gray, modelSize, 0, 0, cv.INTER_AREA);
      const orb = new cv.ORB();
      const keypoints = new cv.KeyPointVector();
      const descriptors = new cv.Mat();
      orb.detectAndCompute(gray, new cv.Mat(), keypoints, descriptors);
      const bf = new cv.BFMatcher(cv.NORM_HAMMING, true);
      const matches = new cv.DMatchVector();
      bf.match(this.modelDescriptors, descriptors, matches);
      let goodMatches = 0;
      for (let i = 0; i < matches.size(); i++) {
        if (matches.get(i).distance < 40) {
          goodMatches++;
        }
      }
      const matchQuality = goodMatches / matches.size();
      console.log('Match Quality:', matchQuality);
      this.verificationResult = matchQuality > 0.1;
      src.delete();
      gray.delete();
      descriptors.delete();
      keypoints.delete();
      matches.delete();
      orb.delete();
      bf.delete();
    } catch (error) {
      console.error('Error during CIN verification', error);
    }
  }

  extractCinNumber(imgElement: HTMLImageElement): void {
    Tesseract.recognize(imgElement)
      .then(result => {
        const cinNumber = this.extractNumberFromText(result.data.text);
        this.extractedCinNumber = cinNumber;
        console.log('Extracted CIN Number:', cinNumber);
      })
      .catch(error => {
        console.error('Error during text recognition', error);
      });
  }

  extractNumberFromText(text: string): string | null {
    const cinNumberPattern = /\d{8}/;
    const match = text.match(cinNumberPattern);
    return match ? match[0] : null;
  }

  onSubmit(): void {
    // Actions supplémentaires lors de la soumission du formulaire
  }

  validatePieceNumber(): boolean {
    const formPieceNumber = this.infoForm.get('pieceNumber')?.value;
    return formPieceNumber === this.extractedCinNumber;
  }

  saveAdditionalInfo(form: FormGroup): void {
    if (form.valid) {
      const formData = form.value;
      console.log('Temporary form data:', formData);
      this.authService.setTemporaryAdditionalInfo(formData);
    } else {
      console.error('Form is invalid.');
    }
  }

  Retour(currentRoute: string): void {
    const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
    if (currentIndex >= 0) {
      this.navData[currentIndex].visited = false;
    }
    window.history.back();
  }

  Suivant(currentRoute: string): void {
    if (this.infoForm.valid) {
      if (this.validatePieceNumber()) {
        const formData: FormGroup = this.infoForm;
        this.saveAdditionalInfo(formData);
        const currentIndex = this.navData.findIndex(item => item.routeLink === currentRoute);
        if (currentIndex < this.navData.length - 1) {
          this.navData[currentIndex].visited = true;
          const nextComponent = this.navData[currentIndex ].routeLink; // Corrected to navigate to the next component
          this.router.navigate(['/dash/' + nextComponent]);
        }
      } else {
        console.error('Piece number does not match the extracted number.');
        // Optionally, provide user feedback here
      }
    } else {
      console.error('Form is invalid or addressForm is not initialized.');
    }
  }
}