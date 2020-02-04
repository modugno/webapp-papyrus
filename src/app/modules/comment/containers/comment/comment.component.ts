import { Component, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search/search.service';

import { CommentService } from '../../shared/services/comment.service';
import { Comment } from '../../shared/interface/comment';
import { FormBuilder } from '@angular/forms';
import { FormBase } from 'src/app/shared/abstract/form-base';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent extends FormBase implements OnInit, OnDestroy {

  constructor(
    protected _searchService: SearchService,
    protected _fb: FormBuilder,
    private _commentService: CommentService
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
    this._commentService.getAll().pipe(take(1))
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

  _create(payload: Comment) {
    this._commentService.save(payload).pipe(take(1))
    .subscribe((comment) => {

      this.formGroup.reset();

      if (comment.status === 500) {
        console.error('ERROR', comment.error);
        return;
      }

      const newcollection = [ ...this.collection ];
      newcollection.unshift(comment.result);
      this.collectionData = [ ...newcollection ];
      this.collection = this.collectionData;
    })
  }

  _update(_id: string, payload: Comment) {
    this._commentService.update(_id, payload).pipe(take(1))
    .subscribe((comment) => {

      this.formGroup.reset();

      if (comment.status === 500) {
        console.error('ERROR', comment.error);
        return;
      }

      const newcollection = (this.collectionData as Comment[]).map((comment) => {
        return (comment._id === _id)
        ? { ...comment, ...payload }
        : comment;
      });

      this.collectionData = newcollection;
      this.collection = this.collectionData;
    })
  }

  onSave() {
    if (!this._getValue('title') && !this._getValue('description')) {
      return;
    }

    const payload: Comment = {
      description: this._getValue('description')
    }

    if (this._getValue('_id')) {
      return this._update(this._getValue('_id'), payload);
    }
    return this._create(payload);
  }
  
  onEdit(comment: Comment) {
    this._getControl('_id').setValue(comment._id);
    this._getControl('description').setValue(comment.description);
    window.scrollTo(0, 0);

  }

  onRemove({ _id }: Comment, index: number) {
    this._commentService.delete(_id).pipe(take(1))
    .subscribe((comment) => {
      if (comment.status == 500) {
        console.error('ERROR', comment.error);
        return;
      }

      this.collectionData.splice(index, 1);
      this.collection = this.collectionData;
    });
  }
}
