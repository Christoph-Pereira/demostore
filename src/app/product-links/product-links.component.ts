import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-links',
  templateUrl: './product-links.component.html',
  styleUrls: ['./product-links.component.scss']
})
export class ProductLinksComponent implements OnInit {

  public productLinks: any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.productLinks = [
      {
        "text": "Advanced Gamification",
        "image": "../../assets/images/Centrical-background-2.png",
        "url": "/product/1"
      },
      {
        "text": "Integrated Occupational Health",
        "image": "../../assets/images/Sodales-background-1-.png",
        "url": "/product/2"
      }
    ]
  }

}
