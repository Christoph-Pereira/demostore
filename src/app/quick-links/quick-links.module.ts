import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickLinkComponent } from '../quick-link/quick-link.component';
import { QuickLinksComponent } from './quick-links.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [QuickLinkComponent, QuickLinksComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [QuickLinksComponent]
})
export class QuickLinksModule { }
