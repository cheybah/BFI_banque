import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsGeneralesEntrepriseComponent } from './conditions-generales-entreprise.component';

describe('ConditionsGeneralesEntrepriseComponent', () => {
  let component: ConditionsGeneralesEntrepriseComponent;
  let fixture: ComponentFixture<ConditionsGeneralesEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionsGeneralesEntrepriseComponent]
    });
    fixture = TestBed.createComponent(ConditionsGeneralesEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
