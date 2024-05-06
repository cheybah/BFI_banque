import { Component } from '@angular/core';
import { FilterPipe } from 'src/app/filter.pipe';

@Component({
  selector: 'app-e-documents',
  templateUrl: './e-documents.component.html',
  styleUrls: ['./e-documents.component.css']
})
export class EDocumentsComponent {

  searchText = '';
  selectedFiles: File[] = [];
  documentName: string = '';
  documentDescription: string = '';
  documentKeywords: string = '';
  documents = [
    { id: '1', name: 'Example PDF', extension: 'pdf', description: 'Example description', keywords: 'example, pdf' },
  ];

  showModal = false; // Toggle modal visibility

  openModal() {
    this.showModal = true;
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
  }

  // Handle file selection
  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFiles = Array.from(files);
      this.documentName = files[0].name; // Default to first file's name
    }
  }

  // Upload files
uploadFiles() {
  if (this.selectedFiles.length === 0) return;

  const file = this.selectedFiles[0];
  const fileExtension = file.name.includes('.') ? file.name.split('.').pop() : 'txt'; // Default to 'txt' if there's no extension
  // Create a new document object with unique ID, name, description, and keywords
  const newDocument = {
    id: String(this.documents.length + 1), // Create a unique ID
    name: this.documentName || 'Untitled Document', // Provide a default name
    extension: fileExtension as string, // Ensure extension is a string
    description: this.documentDescription || 'No description provided', // Default description
    keywords: this.documentKeywords,
  };

  // Append the new document to the documents array
  this.documents.push(newDocument);

  console.log('Uploaded new document:', newDocument);

  // Reset modal input fields
  this.documentName = '';
  this.documentDescription = '';
  this.documentKeywords = '';
  this.selectedFiles = [];

  // Close the modal
  this.closeModal();
}



  getLogo(extension: string) {
    switch (extension.toLowerCase()) {
      case 'pdf':
        return 'assets/img/logos/pdf-logo.png'; // Path to your PDF logo
      case 'doc':
      case 'docx':
        return 'assets/img/logos/word-logo.png'; // Path to your Word logo
      case 'xls':
      case 'xlsx':
        return 'assets/img/logos/excel-logo.png'; // Path to your Excel logo
      // Add more cases for other file types
      default:
        return 'assets/img/logos/default-logo.png'; // Default logo
    }
  }

  deleteDoc(docId: string) {
    this.documents = this.documents.filter(doc => doc.id !== docId);
  }

  updateDoc(docId: string) {
    // Implement the logic to update the document based on the docId
    console.log('Update document with ID:', docId);
  }

  filteredDocuments() {
    return this.documents.filter(doc =>
      doc.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      doc.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      doc.keywords.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

