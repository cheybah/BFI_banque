import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseEntrepriseComponent } from './adresse-entreprise.component';

describe('AdresseEntrepriseComponent', () => {
  let component: AdresseEntrepriseComponent;
  let fixture: ComponentFixture<AdresseEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdresseEntrepriseComponent]
    });
    fixture = TestBed.createComponent(AdresseEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
