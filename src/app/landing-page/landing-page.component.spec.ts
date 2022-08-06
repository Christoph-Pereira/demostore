import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { BannerComponent } from '../banner/banner.component';
import { ProductLinksComponent } from '../product-links/product-links.component';
import { MockComponents, MockModule } from 'ng-mocks';
import { QuickLinksModule } from '../quick-links/quick-links.module';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponent, MockComponents (BannerComponent, ProductLinksComponent) ],
      imports: [MockModule(QuickLinksModule)]
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

