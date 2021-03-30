import { TestBed } from '@angular/core/testing';

import { UserBLService } from './user-bl.service';

describe('UserBLService', () => {
  let service: UserBLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
