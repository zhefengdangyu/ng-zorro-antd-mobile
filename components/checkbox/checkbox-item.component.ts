<<<<<<< HEAD
import { Component, forwardRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface CheckboxStatus {
  name: string;
  value: string;
  checked: boolean;
}
=======
import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  TemplateRef,
  ChangeDetectorRef,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxStatus } from './PropsType';
>>>>>>> upstream/master

@Component({
  selector: 'CheckboxItem, nzm-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
<<<<<<< HEAD
      useExisting: forwardRef(() => CheckboxItem),
=======
      useExisting: forwardRef(() => CheckboxItemComponent),
>>>>>>> upstream/master
      multi: true
    }
  ]
})
<<<<<<< HEAD
export class CheckboxItem implements ControlValueAccessor {
=======
export class CheckboxItemComponent implements ControlValueAccessor {
>>>>>>> upstream/master
  prefixCls = 'am-checkbox';
  checked: boolean = false;
  private _disabled: boolean = false;
  private _ngModelOnChange: (value: boolean) => {};
  private _ngModelOnTouched: () => {};

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
<<<<<<< HEAD
=======
  arrow: string;
  @Input()
  extra: string | TemplateRef<any>;
  @Input()
  wrap: boolean = false;
  @Input()
  error: boolean = false;
  @Input()
  multipleLine: boolean = false;
  @Input()
  platform: string = 'ios';
  @Input()
  align: string = 'middle';
  @Input()
>>>>>>> upstream/master
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
  }
  @Output()
  onChange = new EventEmitter<CheckboxStatus>();

<<<<<<< HEAD
  constructor(private cdr: ChangeDetectorRef) { }

  onCheckboxClick(event) { }
=======
  constructor(private cdr: ChangeDetectorRef) {}

  onCheckboxClick(event) {}
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
