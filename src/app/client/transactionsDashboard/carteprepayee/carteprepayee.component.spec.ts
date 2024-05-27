import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteprepayeeComponent } from './carteprepayee.component';

describe('CarteprepayeeComponent', () => {
  let component: CarteprepayeeComponent;
  let fixture: ComponentFixture<CarteprepayeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteprepayeeComponent]
    });
    fixture = TestBed.createComponent(CarteprepayeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
