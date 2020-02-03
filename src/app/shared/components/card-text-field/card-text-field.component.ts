import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive
} from '@angular/core';

@Directive({
  selector: 'button[pp-button]',
  host: {
    class: 'pp-button',
    '[class.primary]': "color === 'primary'",
    '[class.neutral]': "color === 'neutral'",
  },
  inputs: ['color']
})
export class PpButtonDirective {}

@Directive({
  selector: 'input[pp-input], textarea[pp-input]',
  host: {
    class: 'pp-input'
  }
})
export class PpInputDirective {}

@Component({
  selector: 'pp-card-text-field',
  templateUrl: './card-text-field.component.html',
  styleUrls: ['./card-text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'pp-card-text-field',
    '(focus)': 'focused = true',
    '[class.expanded]': 'focused',
    '[attr.tabindex]': '0'
  }
})
export class CardTextFieldComponent implements OnInit {
  public focused: boolean;
  constructor() { }

  ngOnInit() {
  }

  save() {
    this.focused = false;
  }

  close() {
    this.focused = false;
  }
}
