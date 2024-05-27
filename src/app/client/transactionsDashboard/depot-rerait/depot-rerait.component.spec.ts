import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotReraitComponent } from './depot-rerait.component';

describe('DepotReraitComponent', () => {
  let component: DepotReraitComponent;
  let fixture: ComponentFixture<DepotReraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepotReraitComponent]
    });
    fixture = TestBed.createComponent(DepotReraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
