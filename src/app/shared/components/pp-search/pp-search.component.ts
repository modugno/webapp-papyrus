import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { PpInputBase } from '../../abstract/pp-input-base';

@Component({
  selector: 'pp-search',
  templateUrl: './pp-search.component.html',
  styleUrls: ['./pp-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-search'
  }
})
export class PpSearchComponent extends PpInputBase {
  public focused: boolean;

  onClick() {
    this.inputElement && this.inputElement.focus();
  }
}
