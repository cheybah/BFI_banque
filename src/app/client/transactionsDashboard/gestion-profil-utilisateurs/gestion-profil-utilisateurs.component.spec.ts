import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProfilUtilisateursComponent } from './gestion-profil-utilisateurs.component';

describe('GestionProfilUtilisateursComponent', () => {
  let component: GestionProfilUtilisateursComponent;
  let fixture: ComponentFixture<GestionProfilUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProfilUtilisateursComponent]
    });
    fixture = TestBed.createComponent(GestionProfilUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
