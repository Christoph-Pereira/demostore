import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError, map } from 'rxjs';
import { IProduct } from '../Interface/products';
import { CountryService } from '../services/country.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [];

  private productUrl = 'https://ac-trainee-store-api.herokuapp.com/products';

  public productsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject(
    this.products
  );
  productData$: Observable<IProduct[]> = this.productsSubject.asObservable();

  setProductsSubject(newValue: IProduct[]) {
    this.productsSubject.next(newValue);
  }

  constructor(private http: HttpClient, private country: CountryService) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productUrl, {
        headers: this.country.getHttpHeaders(),
      })
      .pipe(
        tap((data) => this.setProductsSubject(data)),
        catchError(this.handleError)
      );
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getRandomProductTitle(): Observable<string> {
    const rnd = this.getRandomInt(1000);
    return this.getProductTitle(rnd)
    .pipe(map(( productTitle ) => {
      return "attribute title of a random product : " + productTitle;
    }));
  }
  getProductTitle(productId: number): Observable<string> {
    return this.getProducts()
    .pipe(
      map(( products ) => {
        return products[productId];
      }),map(( product ) => {
        return product.title;
      }));
  }

  getProductsByQuery(queryParams: string): Observable<any> {

    return this.http.get<any>(this.productUrl + '/search/' + queryParams)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
