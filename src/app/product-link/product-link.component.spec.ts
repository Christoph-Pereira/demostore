import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLinkComponent } from './product-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductLinkComponent', () => {
  let component: ProductLinkComponent;
  let fixture: ComponentFixture<ProductLinkComponent>;
  const productLink = {
        "text": "Advanced Gamification",
        "image": "../../assets/images/Centrical-background-2.png",
        "url": "/product/1"
      };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLinkComponent ],
      imports:[ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLinkComponent);
    component = fixture.componentInstance;
    
    component.text = productLink.text;
    component.image = productLink.image;
    component.url = productLink.url;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with image', () => {
    expect(fixture).toMatchSnapshot();
  });
});