import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterbancaireComponent } from './interbancaire.component';

describe('InterbancaireComponent', () => {
  let component: InterbancaireComponent;
  let fixture: ComponentFixture<InterbancaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterbancaireComponent]
    });
    fixture = TestBed.createComponent(InterbancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
