import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/products.service';
import { ProductLinksService } from './product-links.service';
import { first, Subscription } from 'rxjs';

interface productLink {
  text: string,
  image: string,
  url: string
}
@Component({
  selector: 'app-product-links',
  templateUrl: './product-links.component.html',
  styleUrls: ['./product-links.component.scss']
})
export class ProductLinksComponent implements OnInit {

  public productLinks: productLink[] | undefined;
  public randomProductTitleText = "";
  private randomProductTitleSubscription: Subscription = new Subscription;

  constructor(private productLinksService: ProductLinksService, private productService: ProductService) { }

  ngOnInit(): void {
    this.productLinks = this.productLinksService.getProductLinks();

    this.randomProductTitleSubscription = this.productService.getRandomProductTitle()
    .subscribe(randomProductTitleText => this.randomProductTitleText = randomProductTitleText);
  }

  ngOnDestroy(): void {
    this.randomProductTitleSubscription.unsubscribe();
  }

}
