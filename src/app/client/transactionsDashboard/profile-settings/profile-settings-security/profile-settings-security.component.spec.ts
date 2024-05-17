import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsSecurityComponent } from './profile-settings-security.component';

describe('ProfileSettingsSecurityComponent', () => {
  let component: ProfileSettingsSecurityComponent;
  let fixture: ComponentFixture<ProfileSettingsSecurityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSettingsSecurityComponent]
    });
    fixture = TestBed.createComponent(ProfileSettingsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
