import { Component, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search/search.service';

import { DiscoveryService } from '../../shared/services/discovery.service';
import { Discovery } from '../../shared/interface/discovery';
import { FormBuilder } from '@angular/forms';
import { FormBase } from 'src/app/shared/abstract/form-base';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent extends FormBase implements OnInit, OnDestroy {

  constructor(
    protected _searchService: SearchService,
    protected _fb: FormBuilder,
    private _discoveryService: DiscoveryService
  ) {
    super(_searchService, _fb);
  }

  ngOnInit() {
    this._observableSearch();
    this._getAll();
    this._createForm();
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  _getAll() {
    this._discoveryService.getAll().pipe(take(1))
    .subscribe((collection) => {
      if (collection.status === 500) {
        console.error('ERROR', collection.error);
        return;
      }

      this.collectionData = collection.result;
      this.collection = this.collectionData;
    });
  }

  _createForm() {
    this.formGroup = this._fb.group({
      _id: [''],
      title: [''],
      description: ['']
    });
  }

  _create(payload: Discovery) {
    this._discoveryService.save(payload).pipe(take(1))
    .subscribe((discovery) => {

      this.formGroup.reset();

      if (discovery.status === 500) {
        console.error('ERROR', discovery.error);
        return;
      }

      const newcollection = [ ...this.collection ];
      newcollection.unshift(discovery.result);
      this.collectionData = [ ...newcollection ];
      this.collection = this.collectionData;
    })
  }

  _update(_id: string, payload: Discovery) {
    this._discoveryService.update(_id, payload).pipe(take(1))
    .subscribe((discovery) => {

      this.formGroup.reset();

      if (discovery.status === 500) {
        console.error('ERROR', discovery.error);
        return;
      }

      const newcollection = (this.collectionData as Discovery[]).map((discovery) => {
        return (discovery._id === _id)
        ? { ...discovery, ...payload }
        : discovery;
      });

      this.collectionData = newcollection;
      this.collection = this.collectionData;
    })
  }

  onSave() {
    if (!this._getValue('title') && !this._getValue('description')) {
      return;
    }

    const payload: Discovery = {
      title: this._getValue('title'),
      description: this._getValue('description')
    }

    if (this._getValue('_id')) {
      return this._update(this._getValue('_id'), payload);
    }
    return this._create(payload);
  }
  
  onEdit(discovery: Discovery) {
    this._getControl('_id').setValue(discovery._id);
    this._getControl('title').setValue(discovery.title);
    this._getControl('description').setValue(discovery.description);
    window.scrollTo(0, 0);

  }

  onRemove({ _id }: Discovery, index: number) {
    this._discoveryService.delete(_id).pipe(take(1))
    .subscribe((discovery) => {
      if (discovery.status == 500) {
        console.error('ERROR', discovery.error);
        return;
      }

      this.collectionData.splice(index, 1);
      this.collection = this.collectionData;
    });
  }
}
