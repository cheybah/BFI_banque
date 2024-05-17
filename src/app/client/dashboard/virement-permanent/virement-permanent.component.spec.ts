import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementPermanentComponent } from './virement-permanent.component';

describe('VirementPermanentComponent', () => {
  let component: VirementPermanentComponent;
  let fixture: ComponentFixture<VirementPermanentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementPermanentComponent]
    });
    fixture = TestBed.createComponent(VirementPermanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
