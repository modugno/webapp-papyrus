import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search/search.service';

import { DiscoveryService } from '../../shared/services/discovery.service';
import { Discovery } from '../../shared/interface/discovery';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent implements OnInit, OnDestroy {

  private _destroyed = new Subject<void>();
  public discoveries: Discovery[];

  constructor(
    private _searchService: SearchService,
    private _discoveryService: DiscoveryService
  ) {}

  ngOnInit() {
    this._getAll();
    this._observableSearch();
  }

  private _getAll() {
    this._discoveryService.getAll().pipe(take(1))
    .subscribe((discoveries) => {
      if (discoveries.status === 500) {
        console.error('ERROR', discoveries.error);
        return;
      }

      this.discoveries = discoveries.result;

      console.log('trazendo aqui', this.discoveries);
    });
  }

  private _observableSearch() {
    this._searchService.search$.pipe(takeUntil(this._destroyed))
    .subscribe((value) => {

      const searchResult = this.discoveries && this.discoveries.filter((discovery) => (
        this._filterSearch(discovery, value)
      ));

      if (searchResult) {
        this.discoveries = [ ...searchResult ];
      }
    });
  }

  _filterSearch(discovery: Discovery, value: string): boolean {
    const { title, description } = discovery;
    return (
      title && title.includes(value)
      || description && description.includes(value)
    )

  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

}
