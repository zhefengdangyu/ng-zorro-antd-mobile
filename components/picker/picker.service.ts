<<<<<<< HEAD
import { Injectable, Injector } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerCallBack, PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/core.module';
@Injectable()
export class Picker extends PopupService {
  static defaultOptions: PickerOptions = new PickerOptions();

  static showPicker(
    config: PickerOptions = Picker.defaultOptions,
    confirmCallback?: PickerCallBack,
    cancelCallback?: PickerCallBack
  ): void {
=======
import { Injectable, Injector, ComponentRef } from '@angular/core';
import { PickerComponent } from './picker.component';
import { PickerCallBack, PickerOptions } from './picker-options.provider';
import { PopupService } from '../core/services/popup.service';

@Injectable()
export class PickerService extends PopupService {
  comRef: ComponentRef<PickerComponent> = null;
  defaultOptions: PickerOptions = new PickerOptions();

  showPicker(
    config: PickerOptions = this.defaultOptions,
    confirmCallback?: PickerCallBack,
    cancelCallback?: PickerCallBack
  ): any {
>>>>>>> upstream/master
    const options = new PickerOptions();
    Object.assign(options, config, {
      hidePicker: (event): void => {
        this.hidePicker();
      },
      confirm: (event): void => {
        if (confirmCallback) {
          confirmCallback(event);
        }
      },
      cancel: (): void => {
        if (cancelCallback) {
          cancelCallback();
        }
      }
    });

    const childInjector = Injector.create([
      {
        provide: PickerOptions,
        useValue: options
      }
    ]);
<<<<<<< HEAD
    Picker.showPopup(PickerComponent, childInjector);
  }

  static hidePicker(): void {
    Picker.hidePopup();
=======
    this.comRef = this.showPopup(PickerComponent, childInjector);
    return this.comRef && this.comRef.instance;
  }

  hidePicker(): void {
    this.hidePopup();
>>>>>>> upstream/master
  }
}
