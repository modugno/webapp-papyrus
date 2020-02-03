import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoveryRoutingModule } from './discovery-routing.module';
import { DiscoveryComponent } from './containers/discovery/discovery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DiscoveryService } from './shared/services/discovery.service';


@NgModule({
  declarations: [DiscoveryComponent],
  imports: [
    CommonModule,
    DiscoveryRoutingModule,
    SharedModule
  ],
  providers: [
    DiscoveryService
  ]
})
export class DiscoveryModule { }
