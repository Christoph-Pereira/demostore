import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderColorService {

  constructor() { }

  private colorSubject$ = new Subject<string>();
  private colorObservable$ = this.colorSubject$.asObservable();

  public setColorSubject(color: string) {
    this.colorSubject$.next(color);
  }

  public getColorObservable() {
    return this.colorObservable$;
  }
}
