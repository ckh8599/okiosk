import { TestBed, inject } from '@angular/core/testing';

import { ErrorlogService } from './errorlog.service';

describe('ErrorlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorlogService]
    });
  });

  it('should be created', inject([ErrorlogService], (service: ErrorlogService) => {
    expect(service).toBeTruthy();
  }));
});
