import { TestBed } from '@angular/core/testing';

import { CurdserviceService } from './curdservice.service';

describe('CurdserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurdserviceService = TestBed.get(CurdserviceService);
    expect(service).toBeTruthy();
  });
});
