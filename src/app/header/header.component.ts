import { ProductService } from '../api/product.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IDetailedProduct } from '../Interface/detailedproduct';
import { of, ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { QueryService } from '../api/query.service';
import { FilterService } from '../services/filter.services';
import { HeaderColorService } from '../services/header-color.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
      state('show', style({ transform: 'translateY(0%)' })),
      state(
        'hide',
        style({
          transform: 'translateY(+10%)',
          visibility: 'hidden',
        })
      ),
      transition('show => hide', [animate('0ms')]),
      transition('hide => show', [animate('150ms')]),
    ]),
  ],
})

export class HeaderComponent implements OnInit, OnDestroy {
  public headerColorSubscription: Subscription = Subscription.EMPTY;
  isHidden: boolean = false;
  currentColor: string = 'primary';
  mainColor: string = 'primary';
  offColor: string = 'white';

  currentLocalItem: IDetailedProduct | undefined = undefined;

  destroy$ = new ReplaySubject<void>(1);

  constructor(
    private router: Router,
    private productService: ProductService,
    private queryService: QueryService,
    private filterService: FilterService,
    private headerColor: HeaderColorService
  ) {}

  private _searchDetails: string = '';

  get searchDetails(): string {
    return this._searchDetails;
  }

  set searchDetails(value: string) {
    this._searchDetails = value;
  }

  onSearch(): void {
    this.queryService.setQueryData(this._searchDetails);
    this.filterService.resetCategoryData();
    this.filterService.resetStatusData();
    this.filterService.resetReleaseDateData();
    this.router.navigate(['search', this._searchDetails]);
    this.toggleSearch();
  }

  toggleSearch(): void {
    this.searchDetails = '';
    this.isHidden = !this.isHidden;
    this.currentColor = this.isHidden ? this.offColor : this.mainColor;
  }

  subToproduct(): void {
    this.productService.product$
      .pipe(takeUntil(this.destroy$))
      .subscribe((singleProduct) => {
        singleProduct
          ? (this.currentLocalItem = singleProduct)
          : (this.currentLocalItem = undefined);
      });
  }

  changeHeaderColor(color: string) {
      console.log(color);
      this.currentColor = color;
  }

  ngOnInit(): void {
    this.subToproduct();

    this.headerColorSubscription.add(this.headerColor.getColorObservable()
    .subscribe(
      color => this.changeHeaderColor(color)
    ));

    this.headerColor.getColorObservable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      color => this.changeHeaderColor(color)
    );

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.headerColorSubscription.unsubscribe();
  }
}
