import { ViewChild, ElementRef } from '@angular/core';

export class PpInputBase {

  @ViewChild('input', { static: true }) private _input: ElementRef<HTMLInputElement>;
  get inputElement():  HTMLInputElement { return this._input && this._input.nativeElement }

  /**
   * Check if the input is empty
   */
  get empty(): boolean {
    return !this.inputElement.value && !this._isBadInput();
  }

  /**
   * Check if the input is valid
   */
  protected _isBadInput() {
    const validity = this.inputElement.validity;
    return validity && validity.badInput;
  }

}
