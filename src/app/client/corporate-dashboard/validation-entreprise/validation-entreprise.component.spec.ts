import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEntrepriseComponent } from './validation-entreprise.component';

describe('ValidationEntrepriseComponent', () => {
  let component: ValidationEntrepriseComponent;
  let fixture: ComponentFixture<ValidationEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationEntrepriseComponent]
    });
    fixture = TestBed.createComponent(ValidationEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
