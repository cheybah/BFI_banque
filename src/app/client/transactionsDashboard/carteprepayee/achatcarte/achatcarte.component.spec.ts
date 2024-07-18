import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatcarteComponent } from './achatcarte.component';

describe('AchatcarteComponent', () => {
  let component: AchatcarteComponent;
  let fixture: ComponentFixture<AchatcarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchatcarteComponent]
    });
    fixture = TestBed.createComponent(AchatcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
