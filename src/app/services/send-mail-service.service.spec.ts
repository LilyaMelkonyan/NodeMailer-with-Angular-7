import { TestBed } from '@angular/core/testing';

import { SendMailServiceService } from './send-mail-service.service';

describe('SendMailServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendMailServiceService = TestBed.get(SendMailServiceService);
    expect(service).toBeTruthy();
  });
});
