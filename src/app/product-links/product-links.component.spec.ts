import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { ProductLinkComponent } from '../product-link/product-link.component';

import { ProductLinksComponent } from './product-links.component';

describe('ProductLinksComponent', () => {
  let component: ProductLinksComponent;
  let fixture: ComponentFixture<ProductLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLinksComponent, MockComponent(ProductLinkComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
