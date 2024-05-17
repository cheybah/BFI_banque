import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrabancaireComponent } from './intrabancaire.component';

describe('IntrabancaireComponent', () => {
  let component: IntrabancaireComponent;
  let fixture: ComponentFixture<IntrabancaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntrabancaireComponent]
    });
    fixture = TestBed.createComponent(IntrabancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
