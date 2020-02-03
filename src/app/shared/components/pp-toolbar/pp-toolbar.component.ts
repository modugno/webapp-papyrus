import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pp-toolbar',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./pp-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-toolbar'
  }
})
export class PpToolbarComponent {}
