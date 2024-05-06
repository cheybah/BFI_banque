import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDocumentsComponent } from './e-documents.component';

describe('EDocumentsComponent', () => {
  let component: EDocumentsComponent;
  let fixture: ComponentFixture<EDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EDocumentsComponent]
    });
    fixture = TestBed.createComponent(EDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
