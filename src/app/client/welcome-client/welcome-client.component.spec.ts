import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeClientComponent } from './welcome-client.component';

describe('WelcomeClientComponent', () => {
  let component: WelcomeClientComponent;
  let fixture: ComponentFixture<WelcomeClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeClientComponent]
    });
    fixture = TestBed.createComponent(WelcomeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
