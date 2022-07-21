import { TestBed } from '@angular/core/testing';

import { HeaderColorService } from './header-color.service';

describe('HeaderColorService', () => {
  let service: HeaderColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
