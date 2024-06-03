import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component: CanComponentDeactivate) => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};
