import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reactiveGuard } from './reactive.guard';

describe('reactiveGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reactiveGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
