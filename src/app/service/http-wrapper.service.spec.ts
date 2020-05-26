import { TestBed } from '@angular/core/testing';

import { HttpWrapperService } from './http-wrapper.service';

describe('HttpWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpWrapperService = TestBed.get(HttpWrapperService);
    expect(service).toBeTruthy();
  });
});
