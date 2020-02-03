import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pp-menu',
  templateUrl: './pp-menu.component.html',
  styleUrls: ['./pp-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-menu'
  }
})
export class PpMenuComponent {}
