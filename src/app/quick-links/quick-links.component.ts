import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {

  public quickLinks: any[] | undefined;

  constructor() { }

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
    ]
  }

}
