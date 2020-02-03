import { SearchService } from '../services/search/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Discovery } from 'src/app/modules/discovery/shared/interface/discovery';
import { Comment } from 'src/app/modules/discovery/shared/interface/comment';

export abstract class FormBase {

  constructor(
    protected _searchService: SearchService,
    protected _fb: FormBuilder
  ) {}

  public formGroup: FormGroup;
  protected _getControl = (field) => this.formGroup.get(field);
  protected _getValue = (field) => this._getControl(field).value;
  protected _destroyed = new Subject<void>();

  public collectionData: Discovery[] | Comment[] | any[] = [];
  public collection = this.collectionData;

  protected _observableSearch() {
    this._searchService.search$.pipe(takeUntil(this._destroyed))
    .subscribe((value) => {
      const searchResult = this.collectionData.filter((collection) => (
        this._filterSearch(collection, value)
      ));

      if (searchResult) {
        this.collection = searchResult;
      }
    });
  }

  protected _filterSearch(collection: Discovery | Comment, value: string): boolean {
    if (!value) {
      return true;
    }

    const { description } = collection;

    return (
      collection['title'] && collection['title'].includes(value)
      || description && description.includes(value)
    )

  }

  onClose() {
    this.formGroup.reset();
  }

  protected abstract _getAll();
  protected abstract _createForm();
  protected abstract _create(payload: Discovery | Comment);
  protected abstract _update(_id: string, payload: Discovery | Comment);
  abstract onSave();
  abstract onEdit(discovery: Discovery | Comment);
  abstract onRemove({ _id }: Discovery | Comment, index: number);
}
