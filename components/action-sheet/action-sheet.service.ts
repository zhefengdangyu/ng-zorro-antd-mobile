import { Injectable, ComponentRef, ComponentFactory, ApplicationRef } from '@angular/core';
import { ActionSheetComponent } from './action-sheet.component';
import {
  ActionCallBack,
  ActionSheetOptions,
  ActionSheetWithOptions,
  ShareActionSheetWithOptions
} from './action-sheet-options.provider';
<<<<<<< HEAD
import { PopupService } from '../core/core.module';
=======
import { PopupService } from '../core/services/popup.service';
>>>>>>> upstream/master

const NORMAL = 'NORMAL';
const SHARE = 'SHARE';
function noop() {}
@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
@Injectable()
export class ActionSheet extends PopupService {
  static compRef: ComponentRef<any> = null;
  static _actionSheetCompFactory: ComponentFactory<ActionSheetComponent> = null;
  static appRef: ApplicationRef = null;
  static comRef: ComponentRef<ActionSheetComponent> = null;

  static instance = null;

  static _initConfig(config: ActionSheetOptions, options: Object = {}): ActionSheetOptions {
=======
export class ActionSheetService extends PopupService {
  compRef: ComponentRef<any> = null;
  _actionSheetCompFactory: ComponentFactory<ActionSheetComponent> = null;
  appRef: ApplicationRef = null;
  comRef: ComponentRef<ActionSheetComponent> = null;

  instance = null;

  _initConfig(config: ActionSheetOptions, options: Object = {}): ActionSheetOptions {
>>>>>>> upstream/master
    const props: ActionSheetOptions = new ActionSheetOptions();
    const optionalParams: string[] = [
      'prefixCls',
      'maskClosable',
      'cancelButtonText',
      'cancelButtonIndex',
      'destructiveButtonIndex',
      'title',
      'message',
      'className',
      'transitionName',
      'maskTransitionName',
      'options',
<<<<<<< HEAD
      'locale'
    ];
    config = Object.assign(options, config, {
      close: (): void => {
        if (config.maskClosable) {
          ActionSheet.closeWithAnimation(config.transitionName, config.maskTransitionName);
=======
      'locale',
      'close'
    ];
    const self = this;
    config = Object.assign(options, config, {
      close: (): void => {
        if (config.maskClosable) {
          self.closeWithAnimation(config.transitionName, config.maskTransitionName);
>>>>>>> upstream/master
        }
      }
    });
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        props[key] = config[key];
      }
    });
    return props;
  }

<<<<<<< HEAD
  static _open(props: ActionSheetOptions) {
    setTimeout(() => {
      ActionSheet.comRef =  ActionSheet.showPopup(ActionSheetComponent);
      ActionSheet.comRef.instance.option = props;
    }, 0);
=======
  _open(props: ActionSheetOptions) {
    this.comRef = this.showPopup(ActionSheetComponent);
    this.comRef.instance.option = props;
    return this.comRef && this.comRef.instance;
>>>>>>> upstream/master
  }

  createActionSheet(
    flag: string,
    config: ActionSheetWithOptions | ShareActionSheetWithOptions,
    callback: ActionCallBack
  ) {
    const options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
    const transitionName = config.transitionName ? config.transitionName : options.transitionName;
    options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
    const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
    options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
<<<<<<< HEAD
    const props = ActionSheet._initConfig(config, options);
    Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : () => {}});
=======
    const props = this._initConfig(config, options);
    Object.assign(props, { onPress: cb }, { flag: flag }, { maskClose: props.maskClosable ? cb : () => {} });
    const self = this;
>>>>>>> upstream/master
    function cb(index: any, rowIndex = 0, event) {
      event.stopPropagation();
      const res = callback(index, rowIndex);
      if (res && res.then) {
        res.then(() => {
          self.closeWithAnimation(transitionName, maskTransitionName);
        });
      } else {
        self.closeWithAnimation(transitionName, maskTransitionName);
      }
    }
<<<<<<< HEAD
    return ActionSheet._open(props);
  }

  static closeWithAnimation(transitionName, maskTransitionName) {
    ActionSheet.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
    ActionSheet.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
=======
    return this._open(props);
  }

  closeWithAnimation(transitionName, maskTransitionName) {
    this.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
    this.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
>>>>>>> upstream/master
    setTimeout(() => {
      this.close();
    }, 200);
  }

  showActionSheetWithOptions(config: ActionSheetWithOptions, callback: ActionCallBack = noop) {
    return this.createActionSheet(NORMAL, config, callback);
  }

  showShareActionSheetWithOptions(config: ShareActionSheetWithOptions, callback: ActionCallBack = noop) {
    return this.createActionSheet(SHARE, config, callback);
  }

<<<<<<< HEAD
  static close() {
    ActionSheet.hidePopup();
=======
  close() {
    this.hidePopup();
>>>>>>> upstream/master
  }
}
