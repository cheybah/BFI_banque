import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementMultipleComponent } from './virement-multiple.component';

describe('VirementMultipleComponent', () => {
  let component: VirementMultipleComponent;
  let fixture: ComponentFixture<VirementMultipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementMultipleComponent]
    });
    fixture = TestBed.createComponent(VirementMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
