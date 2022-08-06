import { Injectable } from '@angular/core';
import { Observable, of, map, first, BehaviorSubject, combineLatest } from 'rxjs';
import { ProductService } from '../api/products.service';
import { switchMap } from 'rxjs/operators';
import { CartService } from './cart.service';
import { Cart } from '../Interface/cart';
import { CartEntries } from '../Interface/cartEntries';

interface User {
  id: number;
  name: string;
  favoriteProduct: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private productService: ProductService, private cartService: CartService) { }


  getUserObservable(): Observable<User> {
    return of ({
      id: 1,
      name: "John",
      favoriteProduct: 1
    });
  }
  
  getFavoriteProductId(): Observable<number> {
    return this.getUserObservable()
    .pipe(map(( user ) => {
      return user.favoriteProduct;
    }))
  }

  getFavoriteProduct(): Observable<string> {
    return this.getFavoriteProductId()
    .pipe(switchMap((productId) => {
      return this.productService.getProductTitle(productId)
    }))
  }

  getCart(): Observable<Cart> {
    return this.cartService.getCart();
  }

  getCartEntries(): Observable<CartEntries[]> {
    return this.getCart()
    .pipe(map(cart => {
      return cart.entries
    }))
  }

  /* 
  doesCartContainFavoriteProduct(): Observable<boolean> {
    return this.getCartEntries()
    .pipe(switchMap(
      entries => this.getFavoriteProductId()
      .pipe(map(
        productId => entries.some(entry => entry.product.id === productId)
      ))
    ))
  } 
  */

  doesCartContainFavoriteProduct(): Observable<boolean> {
    return combineLatest([this.getCartEntries(), this.getFavoriteProductId()])
      .pipe(map(
        ([cartEntries, favoriteProductId]) => cartEntries.some(entry => entry.product.id === favoriteProductId)
      ))
  }

  /*   
  getUserSubject(): BehaviorSubject<User> {
        return new BehaviorSubject({
          "name": "John",
          "favoriteProduct": 1
        });
    }

    getFavoriteProductWithSubject(): any {
      return this.productService.getProductTitle(this.getUserSubject().value.favoriteProduct);
    } 
  */
  
}
