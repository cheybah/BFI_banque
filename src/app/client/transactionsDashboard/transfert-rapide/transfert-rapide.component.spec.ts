import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertRapideComponent } from './transfert-rapide.component';

describe('TransfertRapideComponent', () => {
  let component: TransfertRapideComponent;
  let fixture: ComponentFixture<TransfertRapideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransfertRapideComponent]
    });
    fixture = TestBed.createComponent(TransfertRapideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
