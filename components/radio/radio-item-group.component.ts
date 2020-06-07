import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  Component,
  Output,
  AfterContentInit,
  OnDestroy,
  QueryList,
  forwardRef,
  EventEmitter,
  ContentChildren,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
<<<<<<< HEAD
import { RadioItem } from './radio-item.component';

import { merge, Subject, Subscription } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';

export interface RadioStatus {
  name: string;
  value: string;
}

export const RADIO_ITEM_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioItemGroup),
=======
import { RadioItemComponent } from './radio-item.component';

import { merge, Subject, Subscription } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { RadioStatus } from './PropsType';

export const RADIO_ITEM_GROUP_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioItemGroupComponent),
>>>>>>> upstream/master
  multi: true
};

@Component({
  selector: 'RadioItemGroup, nzm-radio-item-group',
  templateUrl: './radio-item-group.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR]
})
<<<<<<< HEAD
export class RadioItemGroup implements AfterContentInit, OnDestroy, ControlValueAccessor {
=======
export class RadioItemGroupComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {
>>>>>>> upstream/master
  private selectedValue: string | number;
  private destroy$ = new Subject();
  private selectSubscription: Subscription;

  private _ngModelOnChange: (value: string | number) => {};
  private _ngModelOnTouched: () => {};

<<<<<<< HEAD
  @ContentChildren(forwardRef(() => RadioItem)) radioItems: QueryList<RadioItem>;
=======
  @ContentChildren(forwardRef(() => RadioItemComponent)) radioItems: QueryList<RadioItemComponent>;
>>>>>>> upstream/master

  @Output()
  onChange = new EventEmitter<RadioStatus>();

  constructor(private cdr: ChangeDetectorRef) {}

  updateChildrenStatus() {
<<<<<<< HEAD
    if (this.radioItems && typeof(this.selectedValue) !== 'undefined' && null !== this.selectedValue) {
      this.radioItems.forEach(radioItem => {
        radioItem.checked = radioItem.value === this.selectedValue;
=======
    if (this.radioItems && typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
      Promise.resolve().then(() => {
        this.radioItems.forEach(radioItem => {
          radioItem.checked = radioItem.value === this.selectedValue;
          radioItem.markForCheck();
        });
>>>>>>> upstream/master
      });
    }
  }

  ngAfterContentInit() {
    this.radioItems.changes
      .pipe(
        startWith(null),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.updateChildrenStatus();
        if (this.selectSubscription) {
          this.selectSubscription.unsubscribe();
        }
        this.selectSubscription = merge(...this.radioItems.map(radioItem => radioItem.select$))
          .pipe(takeUntil(this.destroy$))
          .subscribe(radioItem => {
<<<<<<< HEAD
            if (typeof(this.selectedValue) !== 'undefined' && null !== this.selectedValue) {
=======
            if (typeof this.selectedValue !== 'undefined' && null !== this.selectedValue) {
>>>>>>> upstream/master
              this.selectedValue = radioItem.value;
              this._ngModelOnChange(radioItem.value);
              this.updateChildrenStatus();
              if (this.onChange) {
<<<<<<< HEAD
                this.onChange.emit({name: radioItem.name, value: radioItem.value});
=======
                this.onChange.emit({ name: radioItem.name, value: radioItem.value });
>>>>>>> upstream/master
              }
            }
          });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  writeValue(value: string | number): void {
<<<<<<< HEAD
    if (typeof(value) !== 'undefined' && null !== value) {
=======
    if (typeof value !== 'undefined' && null !== value) {
>>>>>>> upstream/master
      this.selectedValue = value;
      this.updateChildrenStatus();
      this.cdr.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this._ngModelOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._ngModelOnTouched = fn;
  }
}
