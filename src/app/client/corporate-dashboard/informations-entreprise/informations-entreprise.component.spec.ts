import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsEntrepriseComponent } from './informations-entreprise.component';

describe('InformationsEntrepriseComponent', () => {
  let component: InformationsEntrepriseComponent;
  let fixture: ComponentFixture<InformationsEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationsEntrepriseComponent]
    });
    fixture = TestBed.createComponent(InformationsEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
