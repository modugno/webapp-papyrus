import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentComponent } from './containers/comment/comment.component';
import { CommentService } from './shared/services/comment.service';


@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
