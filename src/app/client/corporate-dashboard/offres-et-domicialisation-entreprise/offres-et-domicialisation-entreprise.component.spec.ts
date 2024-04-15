import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresEtDomicialisationEntrepriseComponent } from './offres-et-domicialisation-entreprise.component';

describe('OffresEtDomicialisationEntrepriseComponent', () => {
  let component: OffresEtDomicialisationEntrepriseComponent;
  let fixture: ComponentFixture<OffresEtDomicialisationEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffresEtDomicialisationEntrepriseComponent]
    });
    fixture = TestBed.createComponent(OffresEtDomicialisationEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
