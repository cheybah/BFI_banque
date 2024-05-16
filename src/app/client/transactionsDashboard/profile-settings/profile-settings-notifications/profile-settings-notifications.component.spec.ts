import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsNotificationsComponent } from './profile-settings-notifications.component';

describe('ProfileSettingsNotificationsComponent', () => {
  let component: ProfileSettingsNotificationsComponent;
  let fixture: ComponentFixture<ProfileSettingsNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileSettingsNotificationsComponent]
    });
    fixture = TestBed.createComponent(ProfileSettingsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
