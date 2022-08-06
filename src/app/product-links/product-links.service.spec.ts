import { TestBed } from '@angular/core/testing';

import { ProductLinksService } from './product-links.service';

describe('ProductLinksService', () => {
  let service: ProductLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
