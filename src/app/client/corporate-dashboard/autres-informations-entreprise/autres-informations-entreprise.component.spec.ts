import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutresInformationsEntrepriseComponent } from './autres-informations-entreprise.component';

describe('AutresInformationsEntrepriseComponent', () => {
  let component: AutresInformationsEntrepriseComponent;
  let fixture: ComponentFixture<AutresInformationsEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutresInformationsEntrepriseComponent]
    });
    fixture = TestBed.createComponent(AutresInformationsEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
