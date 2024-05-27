import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeCarteComponent } from './recharge-carte.component';

describe('RechargeCarteComponent', () => {
  let component: RechargeCarteComponent;
  let fixture: ComponentFixture<RechargeCarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechargeCarteComponent]
    });
    fixture = TestBed.createComponent(RechargeCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
