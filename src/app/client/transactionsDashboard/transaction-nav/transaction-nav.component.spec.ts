import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNavComponent } from './transaction-nav.component';

describe('TransactionNavComponent', () => {
  let component: TransactionNavComponent;
  let fixture: ComponentFixture<TransactionNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionNavComponent]
    });
    fixture = TestBed.createComponent(TransactionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
