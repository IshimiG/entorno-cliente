import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { articulosGuard } from './articulos.guard';

describe('articulosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => articulosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
