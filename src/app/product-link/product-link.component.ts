import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-link',
  templateUrl: './product-link.component.html',
  styleUrls: ['./product-link.component.scss']
})
export class ProductLinkComponent {
  
  @Input() public text: String | undefined;
  @Input() public image: String | undefined;
  @Input() public url: String | undefined;

  constructor() { }

}
