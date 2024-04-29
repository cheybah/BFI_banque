import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsdashComponent } from './transactionsdash.component';

describe('TransactionsdashComponent', () => {
  let component: TransactionsdashComponent;
  let fixture: ComponentFixture<TransactionsdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsdashComponent]
    });
    fixture = TestBed.createComponent(TransactionsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
