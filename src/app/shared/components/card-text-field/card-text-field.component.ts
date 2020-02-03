import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Directive,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

@Directive({
  selector: 'button[pp-button]',
  host: {
    class: 'pp-button',
    '[class.primary]': "color === 'primary'",
    '[class.neutral]': "color === 'neutral'",
    '[class.danger]': "color === 'danger'",
  }
})
export class PpButtonDirective {
  @Input() color: string;
}

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
export class CardTextFieldComponent {

  public focused: boolean;

  @Output()
  public onSave$ = new EventEmitter(false);

  @Output()
  public onClose$ = new EventEmitter(false);

  save() {
    this.focused = false;
    this.onSave$.emit(true);
  }

  close() {
    this.focused = false;
    this.onClose$.emit(true);
  }
}
