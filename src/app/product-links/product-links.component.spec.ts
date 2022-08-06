import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { ProductLinkComponent } from '../product-link/product-link.component';

import { ProductLinksComponent } from './product-links.component';
import { ProductLinksService } from './product-links.service';

describe('ProductLinksComponent', () => {
  let component: ProductLinksComponent;
  let fixture: ComponentFixture<ProductLinksComponent>;
  let productLinks = [{
    "text": "Advanced Gamification",
    "image": "../../assets/images/Centrical-background-2.png",
    "url": "/product/1"
  },
  {
    "text": "Integrated Occupational Health",
    "image": "../../assets/images/Sodales-background-1-.png",
    "url": "/product/2"
  }];
  const mockedProductLinksService: any = {getProductLinks: jest.fn().mockReturnValue(
    productLinks)};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLinksComponent, MockComponent(ProductLinkComponent) ],
      providers: [
        { provide: ProductLinksService, useValue: mockedProductLinksService }
      ]
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

  it('should contain productLinks', () => {
    expect(component.productLinks).toBeTruthy();
  });
  
  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should have 2 productLinks', () => {
    const appProductLinks = fixture.nativeElement.querySelectorAll('app-product-link');
    expect(appProductLinks.length).toEqual(2);
  });
  
  it('should have 3 productLinks', () => {
    productLinks.push({
      "text": "Integrated Occupational Health",
      "image": "../../assets/images/Sodales-background-1-.png",
      "url": "/product/2"
    });
    fixture.detectChanges();
    const appProductLinks = fixture.nativeElement.querySelectorAll('app-product-link');
    expect(appProductLinks.length).toEqual(3);
  });

  it('should pass values to productLink', () => {
    const productLink: ProductLinkComponent = fixture.debugElement.query(By.css('app-product-link')).componentInstance;
    expect(productLink.text).toBeTruthy();
    expect(productLink.image).toBeTruthy();
    expect(productLink.url).toBeTruthy();
  });
});
