import { TestBed } from '@angular/core/testing';

import { UserResultsService } from './user-results.service';

describe('UserResultsService', () => {
  let service: UserResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
