import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLinksComponent } from './quick-links.component';
import { QuickLinkComponent } from '../quick-link/quick-link.component';
import { MockComponent } from 'ng-mocks';

describe('QuickLinksComponent', () => {
  let component: QuickLinksComponent;
  let fixture: ComponentFixture<QuickLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLinksComponent, MockComponent(QuickLinkComponent) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
