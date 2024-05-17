import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementAutreCompteComponent } from './virement-autre-compte.component';

describe('VirementAutreCompteComponent', () => {
  let component: VirementAutreCompteComponent;
  let fixture: ComponentFixture<VirementAutreCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementAutreCompteComponent]
    });
    fixture = TestBed.createComponent(VirementAutreCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
