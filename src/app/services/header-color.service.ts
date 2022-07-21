import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderColorService {

  constructor() { }

  public colorSubject$ = new Subject<string>();
}
