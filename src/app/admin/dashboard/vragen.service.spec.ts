import { TestBed } from '@angular/core/testing';

import { VragenService } from './vragen.service';

describe('VragenService', () => {
  let service: VragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
