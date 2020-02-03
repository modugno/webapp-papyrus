import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pp-header',
  templateUrl: './pp-header.component.html',
  styleUrls: ['./pp-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-header'
  }
})
export class PpHeaderComponent {}
