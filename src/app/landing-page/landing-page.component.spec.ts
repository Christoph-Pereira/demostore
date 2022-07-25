import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductLinkComponent } from '../product-link/product-link.component';

import { LandingPageComponent } from './landing-page.component';
import { BannerComponent } from '../banner/banner.component';
import { QuickLinksComponent } from '../quick-links/quick-links.component';
import { ProductLinksComponent } from '../product-links/product-links.component';
import { MockComponents } from 'ng-mocks';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent, MockComponents (BannerComponent, QuickLinksComponent, ProductLinksComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});

