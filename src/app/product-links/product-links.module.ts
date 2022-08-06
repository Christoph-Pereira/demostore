import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLinkComponent } from '../product-link/product-link.component';
import { ProductLinksComponent } from './product-links.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductLinkComponent, ProductLinksComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ProductLinksComponent]
})
export class ProductLinksModule { }
