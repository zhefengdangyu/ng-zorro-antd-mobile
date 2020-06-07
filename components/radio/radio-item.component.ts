<<<<<<< HEAD
import { Component, ChangeDetectorRef, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
=======
import {
  Component,
  ChangeDetectorRef,
  Input,
  TemplateRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
>>>>>>> upstream/master
import { Subject } from 'rxjs';

@Component({
  selector: 'RadioItem, nzm-radio-item',
  templateUrl: './radio-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
<<<<<<< HEAD
export class RadioItem {
  select$ = new Subject<RadioItem>();
=======
export class RadioItemComponent {
  select$ = new Subject<RadioItemComponent>();
>>>>>>> upstream/master
  prefixCls: string = 'am-radio';
  private _checked: boolean = false;
  private _disabled: boolean = false;

  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
    this.cdr.markForCheck();
  }

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
<<<<<<< HEAD
=======
  arrow: string;
  @Input()
  thumb: string | TemplateRef<any>;
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
    this.cdr.markForCheck();
  }
<<<<<<< HEAD

  constructor(private cdr: ChangeDetectorRef) {}

  onRadioItemClick(event) {}

=======

  constructor(private cdr: ChangeDetectorRef) {}

  onRadioItemClick(event) {}

>>>>>>> upstream/master
  change(event) {
    if (!this.disabled && !this.checked) {
      this.select$.next(this);
    }
  }

  markForCheck(): void {
    this.cdr.markForCheck();
  }
}
