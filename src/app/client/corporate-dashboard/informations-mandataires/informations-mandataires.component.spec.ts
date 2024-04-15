import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsMandatairesComponent } from './informations-mandataires.component';

describe('InformationsMandatairesComponent', () => {
  let component: InformationsMandatairesComponent;
  let fixture: ComponentFixture<InformationsMandatairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationsMandatairesComponent]
    });
    fixture = TestBed.createComponent(InformationsMandatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
