import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactsComponent } from './my-contacts.component';

describe('MyContactsComponent', () => {
  let component: MyContactsComponent;
  let fixture: ComponentFixture<MyContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyContactsComponent]
    });
    fixture = TestBed.createComponent(MyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
