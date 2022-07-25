import { Component, Input, OnInit } from '@angular/core';
import { HeaderColorService } from '../services/header-color.service';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss']
})
export class QuickLinkComponent {

  @Input() public headline: String | undefined;
  @Input() public text: String | undefined;
  @Input() public url: String | undefined;
  @Input() public newTab: boolean | undefined;

  constructor(private headerColor: HeaderColorService) {
   }

  changeHeaderBackground() {
    this.headerColor.setColorSubject("black");
  }

}
