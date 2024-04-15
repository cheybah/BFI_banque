import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDePasseEntrepriseComponent } from './mot-de-passe-entreprise.component';

describe('MotDePasseEntrepriseComponent', () => {
  let component: MotDePasseEntrepriseComponent;
  let fixture: ComponentFixture<MotDePasseEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotDePasseEntrepriseComponent]
    });
    fixture = TestBed.createComponent(MotDePasseEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
