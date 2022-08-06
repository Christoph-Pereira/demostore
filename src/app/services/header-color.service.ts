import { Injectable } from '@angular/core';
import { Subject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderColorService {

  constructor() { }

  private colorSubject$ = new Subject<string>();

  public setColorSubject(color: string) {
    this.colorSubject$.next(color);
  }

  public getColorObservable() {
    return this.colorSubject$.asObservable().pipe(delay(1000));
  }
}
