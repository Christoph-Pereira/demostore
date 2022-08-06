import { Component, OnInit } from '@angular/core';
import { ProductService } from '../api/products.service';
import { UserServiceService } from '../services/user-service.service';
import { Observable } from 'rxjs';

interface quickLink {
  headline: string,
  text: string,
  url: string,
  newTab: boolean
}
@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})

export class QuickLinksComponent implements OnInit {

  public quickLinks: quickLink[] | undefined;
  public randomProductTitleText: Observable<string> = this.productService.getRandomProductTitle();
  public getFavoriteProduct: Observable<string> = this.userService.getFavoriteProduct();
  public doesCartContainFavoriteProduct: Observable<boolean> = this.userService.doesCartContainFavoriteProduct();

  constructor(private productService: ProductService, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.quickLinks = [
      {
        "headline": "QuickLinksLink01",
        "text": "Example QuickLink >",
        "url": "/configurator",
        "newTab": false
      },
      {
        "headline": "QuickLinksLink02",
        "text": "Example QuickLink >",
        "url": "/search/need",
        "newTab": true
      },
      {
        "headline": "QuickLinksLink03",
        "text": "Example QuickLink >",
        "url": "https://angular.io/",
        "newTab": false
      }
    ];
  }

}
