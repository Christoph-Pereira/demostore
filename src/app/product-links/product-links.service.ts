import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductLinksService {

  constructor() { }

  
  private productLinks = [
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

  getProductLinks() {
    return this.productLinks;
  }
}
