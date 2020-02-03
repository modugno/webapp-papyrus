import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pp-card',
  templateUrl: './pp-card.component.html',
  styleUrls: ['./pp-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-card'
  }
})
export class PpCardComponent {}
