import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { PpInputBase } from '../../abstract/pp-input-base';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'pp-search',
  templateUrl: './pp-search.component.html',
  styleUrls: ['./pp-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-search'
  }
})
export class PpSearchComponent extends PpInputBase implements OnInit, OnDestroy {
  public focused: boolean;
  public formGroup: FormGroup;
  private _destroyed = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _searchService: SearchService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = this._fb.group({
      search: ['']
    });

    this.formGroup.get('search').valueChanges.pipe(
      takeUntil(this._destroyed),
      debounceTime(300)
    ).subscribe(value => {
      this._searchService.find(value);
    })
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  onClick() {
    this.inputElement && this.inputElement.focus();
  }
}
