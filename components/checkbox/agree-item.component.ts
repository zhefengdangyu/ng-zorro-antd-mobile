import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectorRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
<<<<<<< HEAD

export interface CheckboxStatus {
  name: string;
  value: string;
  checked: boolean;
}
=======
import { CheckboxStatus } from './PropsType';
>>>>>>> upstream/master

@Component({
  selector: 'AgreeItem, nzm-agree-item',
  templateUrl: './agree-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
<<<<<<< HEAD
      useExisting: forwardRef(() => AgreeItem),
=======
      useExisting: forwardRef(() => AgreeItemComponent),
>>>>>>> upstream/master
      multi: true
    }
  ]
})
<<<<<<< HEAD
export class AgreeItem implements ControlValueAccessor {
=======
export class AgreeItemComponent implements ControlValueAccessor {
>>>>>>> upstream/master
  prefixCls: string = 'am-checkbox';
  checked: boolean = false;
  private _disabled: boolean = false;

  private _ngModelOnChange: (value: boolean) => {};
  private _ngModelOnTouched: () => {};

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Output()
  onChange = new EventEmitter<CheckboxStatus>();

  @HostBinding('class.am-checkbox-agree')
  checkboxAgree: boolean = true;

<<<<<<< HEAD
  constructor(private cdr: ChangeDetectorRef) { }
=======
  constructor(private cdr: ChangeDetectorRef) {}
>>>>>>> upstream/master

  change(event) {
    this.checked = event.checked;
    this._ngModelOnChange(event.checked);
    this.onChange.emit(event);
  }

  writeValue(value: boolean): void {
    this.checked = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (_: boolean) => {}): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this._ngModelOnTouched = fn;
  }
}
