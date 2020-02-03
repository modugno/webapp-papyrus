import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoveryComponent } from './containers/discovery/discovery.component';

const routes: Routes = [
  {
    path: '',
    component: DiscoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoveryRoutingModule {}
