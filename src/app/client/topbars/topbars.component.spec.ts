import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarsComponent } from './topbars.component';

describe('TopbarsComponent', () => {
  let component: TopbarsComponent;
  let fixture: ComponentFixture<TopbarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarsComponent]
    });
    fixture = TestBed.createComponent(TopbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
