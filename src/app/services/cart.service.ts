import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../Interface/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(): Observable<Cart> {
    return of ({
      userId: 1,
      entries: [{
        product: {
          id: 3,
          title: "",
          teaser: "",
          icon: "",
          category: "",
          image: "",
          status: "",
          releaseDate: ""
        }
      }]
    });
  }
}
