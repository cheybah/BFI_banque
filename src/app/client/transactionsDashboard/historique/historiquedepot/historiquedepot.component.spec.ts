import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquedepotComponent } from './historiquedepot.component';

describe('HistoriquedepotComponent', () => {
  let component: HistoriquedepotComponent;
  let fixture: ComponentFixture<HistoriquedepotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriquedepotComponent]
    });
    fixture = TestBed.createComponent(HistoriquedepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
