import { TestBed } from '@angular/core/testing';

import { UserResultsService } from './user-results.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UserResultsService', () => {
  let service: UserResultsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
  })

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
