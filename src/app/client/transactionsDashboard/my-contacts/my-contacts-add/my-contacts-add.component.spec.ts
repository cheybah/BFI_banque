import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactsAddComponent } from './my-contacts-add.component';

describe('MyContactsAddComponent', () => {
  let component: MyContactsAddComponent;
  let fixture: ComponentFixture<MyContactsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyContactsAddComponent]
    });
    fixture = TestBed.createComponent(MyContactsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
