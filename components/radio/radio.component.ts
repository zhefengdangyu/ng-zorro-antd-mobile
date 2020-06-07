import {
  Component,
  Input,
  Output,
  OnInit,
  HostBinding,
  HostListener,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
<<<<<<< HEAD

export interface RadioStatus {
  name: string;
  value: string;
}
=======
import { RadioStatus } from './PropsType';
>>>>>>> upstream/master

@Component({
  selector: '[Radio], [nzm-radio]',
  templateUrl: './radio.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
<<<<<<< HEAD
export class Radio implements OnInit {
=======
export class RadioComponent implements OnInit {
>>>>>>> upstream/master
  prefixCls: string = 'am-radio';
  classMap: object = {
    [this.prefixCls]: true,
    [`${this.prefixCls}-checked`]: this.checked,
    [`${this.prefixCls}-disabled`]: this.disabled
  };
  private _checked: boolean = false;
  private _disabled: boolean = false;

  @Input()
  name: string;
  @Input()
  value: string;
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
    this.updateClassMap();
  }
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.updateClassMap();
  }
  @Output()
  onChange = new EventEmitter<RadioStatus>();

  @HostBinding('class.am-radio-wrapper')
  radioWrapper: boolean = true;

  @HostListener('click', ['$event'])
  onClick(event): void {
    event.preventDefault();
    if (!this._disabled && !this._checked) {
      this.updateValue(true);
    }
  }

  constructor() { }

  updateValue(checkValue: boolean): void {
    this.checked = checkValue;
    this.onChange.emit({
      name: this.name,
      value: this.value
    });
  }

  ngOnInit() {
    this.updateClassMap();
  }

  private updateClassMap(): void {
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-disabled`]: this.disabled
    };
  }
}
