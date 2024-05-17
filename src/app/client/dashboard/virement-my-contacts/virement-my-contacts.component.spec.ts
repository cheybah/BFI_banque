import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementMyContactsComponent } from './virement-my-contacts.component';

describe('VirementMyContactsComponent', () => {
  let component: VirementMyContactsComponent;
  let fixture: ComponentFixture<VirementMyContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirementMyContactsComponent]
    });
    fixture = TestBed.createComponent(VirementMyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
