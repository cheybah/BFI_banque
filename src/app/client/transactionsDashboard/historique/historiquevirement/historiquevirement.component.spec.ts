import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquevirementComponent } from './historiquevirement.component';

describe('HistoriquevirementComponent', () => {
  let component: HistoriquevirementComponent;
  let fixture: ComponentFixture<HistoriquevirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriquevirementComponent]
    });
    fixture = TestBed.createComponent(HistoriquevirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
