import { TestBed } from '@angular/core/testing';

import { ContentTreeService } from './content-tree.service';

describe('ContentTreeService', () => {
  let service: ContentTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
