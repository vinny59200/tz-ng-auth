import { TestBed } from '@angular/core/testing';

import { EasyUserService } from './easy-user-service.service';

describe('EasyUserServiceService', () => {
  let service: EasyUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
