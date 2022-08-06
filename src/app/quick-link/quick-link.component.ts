import { Component, Input, OnInit } from '@angular/core';
import { HeaderColorService } from '../services/header-color.service';

@Component({
  selector: 'app-quick-link',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss']
})
export class QuickLinkComponent {

  @Input() public headline: string | undefined;
  @Input() public text: string | undefined;
  @Input() public url: string | undefined;
  @Input() public newTab: boolean | undefined;

  constructor(private headerColor: HeaderColorService) {
   }

  changeHeaderBackground() {
    this.headerColor.setColorSubject("black");
  }

}
