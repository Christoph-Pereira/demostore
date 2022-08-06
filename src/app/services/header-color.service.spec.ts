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

  it('should change the color of the observable', (done) => {
    service.getColorObservable()
    .subscribe(
      color => {
        expect(color).toEqual("black");
        done();
      }
    )
    service.setColorSubject("black");
  });
});
