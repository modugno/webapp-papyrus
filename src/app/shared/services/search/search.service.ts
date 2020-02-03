import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _search: BehaviorSubject<string> = new BehaviorSubject(null);
  public search$: Observable<string> = this._search.asObservable();

  public find(value: string) {
    this._search.next(value);
  }

}
