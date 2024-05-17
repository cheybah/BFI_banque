import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageComparisonService {

  constructor() { }

  async compareImages(imageData: File, referenceImage: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedImage = new Image();
        uploadedImage.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = uploadedImage.width;
          canvas.height = uploadedImage.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(uploadedImage, 0, 0);
            const uploadedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            const reference = new Image();
            reference.onload = () => {
              const canvasRef = document.createElement('canvas');
              canvasRef.width = reference.width;
              canvasRef.height = reference.height;
              const ctxRef = canvasRef.getContext('2d');
              if (ctxRef) {
                ctxRef.drawImage(reference, 0, 0);
                const referenceImageData = ctxRef.getImageData(0, 0, canvasRef.width, canvasRef.height).data;

                const threshold = 0.9; // Adjust threshold as needed
                const similarity = this.calculateSimilarity(uploadedImageData, referenceImageData);
                resolve(similarity >= threshold);
              } else {
                reject(new Error('Failed to get 2D context for reference image.'));
              }
            };
            reference.src = referenceImage;
          } else {
            reject(new Error('Failed to get 2D context for uploaded image.'));
          }
        };
        uploadedImage.src = reader.result as string;
      };
      reader.readAsDataURL(imageData);
    });
  }

  calculateSimilarity(imageData1: Uint8ClampedArray, imageData2: Uint8ClampedArray): number {
    let similarity = 0;
    for (let i = 0; i < imageData1.length; i += 4) {
      // Compare pixel values (RGBA)
      const diffR = Math.abs(imageData1[i] - imageData2[i]);
      const diffG = Math.abs(imageData1[i + 1] - imageData2[i + 1]);
      const diffB = Math.abs(imageData1[i + 2] - imageData2[i + 2]);
      // Calculate average difference
      const diffAvg = (diffR + diffG + diffB) / 3;
      // Normalize difference to range [0, 1]
      const diffNorm = diffAvg / 255;
      // Update similarity
      similarity += 1 - diffNorm;
    }
    // Calculate average similarity
    return similarity / (imageData1.length / 4);
  }
}
