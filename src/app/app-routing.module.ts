import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentModule } from './modules/comment/comment.module';


const routes: Routes = [
  {
    path: '/',
    redirectTo: 'discovery'
  },
  {
    path: 'discovery',
    loadChildren: () => import('./modules/discovery/discovery.module').then((m) => m.DiscoveryModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./modules/comment/comment.module').then((m) => m.CommentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
