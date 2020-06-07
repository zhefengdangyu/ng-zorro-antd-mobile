<<<<<<< HEAD
import {
  Injectable,
  Injector,
  ComponentRef,
  TemplateRef,
} from '@angular/core';
import { ModalServiceComponent } from './modal.component';
import { BaseOptions, ModalOptions, AlertOptions, Action } from './modal-options.provider';
import { PopupService } from '../core/core.module';
=======
import { Injectable, Injector, ComponentRef, TemplateRef } from '@angular/core';
import { ModalServiceComponent } from './modal.component';
import { ModalBaseOptions, ModalOptions, AlertOptions, Action } from './modal-options.provider';
import { PopupService } from '../core/services/popup.service';
import { ModalRef } from './modal-ref.class';
>>>>>>> upstream/master
@Injectable({
  providedIn: 'root'
})
@Injectable()
<<<<<<< HEAD
export class Modal extends PopupService {
  static modalRef: ComponentRef<ModalServiceComponent> = null;
  static _initConfig(config: BaseOptions, options: any): BaseOptions {
    const props: BaseOptions = new BaseOptions();
=======
export class ModalService extends PopupService {
  modalRef: ComponentRef<ModalServiceComponent> = null;
  _initConfig(config: ModalBaseOptions, options: any): ModalBaseOptions {
    const props: ModalBaseOptions = new ModalBaseOptions();
>>>>>>> upstream/master
    const optionalParams: string[] = [
      'visible',
      'focus',
      'prefixCls',
      'animated',
      'closable',
      'maskClosable',
      'onClose',
      'transparent',
      'popup',
      'animationType',
      'title',
      'footer',
      'platform',
      'className',
      'wrapClassName',
      'message',
      'actions',
      'callbackOrActions',
      'type',
      'defaultValue',
      'placeholders',
      'operation',
      'transitionName',
      'maskTransitionName',
      'close',
      'closeWithAnimation'
    ];
<<<<<<< HEAD
    config = Object.assign(options, config, {
      close: (): void => {
        if (config.maskClosable || config.closable) {
          Modal.closeWithAnimation();
=======
    const self = this;
    config = Object.assign(
      options,
      config,
      {
        close: (): void => {
          if (config.maskClosable || config.closable) {
            self.closeWithAnimation();
          }
        }
      },
      {
        closeWithAnimation: (): void => {
          self.closeWithAnimation();
>>>>>>> upstream/master
        }
      }
    );
    optionalParams.forEach(key => {
      if (config[key] !== undefined) {
        props[key] = config[key];
      }
    });
    return props;
  }

<<<<<<< HEAD
  static _open(props: BaseOptions): any {
=======
  _open(props: ModalBaseOptions): any {
>>>>>>> upstream/master
    const childInjector = Injector.create([
      {
        provide: ModalOptions,
        useValue: props
      }
    ]);
<<<<<<< HEAD
    setTimeout(() => {
      Modal.modalRef =  Modal.showPopup(ModalServiceComponent, childInjector);
    }, 0);
  }

  static closeWithAnimation() {
    const options: BaseOptions = new BaseOptions();
    Modal.modalRef.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
    Modal.modalRef.instance.maskTransitionName = `${options.maskTransitionName}-leave ${
      options.maskTransitionName
    }-leave-active`;
=======
    this.modalRef = this.showPopup(ModalServiceComponent, childInjector);
    return this.modalRef && this.modalRef.instance;
  }

  closeWithAnimation() {
    const options: ModalBaseOptions = new ModalBaseOptions();
    this.modalRef.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
    this.modalRef.instance.maskTransitionName = `${options.maskTransitionName}-leave ${options.maskTransitionName}-leave-active`;
>>>>>>> upstream/master
    setTimeout(() => {
      this.close();
    }, 200);
  }

<<<<<<< HEAD
  static alert(
=======
  alert(
>>>>>>> upstream/master
    title?: string | TemplateRef<any>,
    message?: string | TemplateRef<any>,
    actions?: Array<any>,
    platform?: string
  ): any {
    const options: AlertOptions = new AlertOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.platform = 'ios';

    const footer = getFooter.call(this, actions);

    const config = Object.assign({
      title: title,
      message: message,
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });

<<<<<<< HEAD
    const props = Modal._initConfig(config, options);
    return Modal._open(props);
=======
    const props = this._initConfig(config, options);
    return this._open(props);
>>>>>>> upstream/master
  }

  prompt(
    title?: string | TemplateRef<any>,
    message?: string | TemplateRef<any>,
    callbackOrActions?: any,
    type?: string,
    defaultValue?: Array<string>,
    placeholders?: Array<any>,
    platform?: string
  ): any {
    const options: ModalOptions = new ModalOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.className = 'am-modal-alert-content';
    options.defaultValue = defaultValue || ['', ''];
    options.placeholders = placeholders;
    (options.type = type ? type : 'default'), (options.platform = platform ? platform : 'ios');

<<<<<<< HEAD
    function getArgs(self, func) {
      const text = Modal.modalRef.instance.data.text || options.defaultValue[0];
      const password = Modal.modalRef.instance.data.password || options.defaultValue[1];
=======
    function getArgs(self: any, func: any) {
      let text: any, password: any;
      if (self.modalRef) {
        text = self.modalRef.instance.data.text || options.defaultValue[0];
        password = self.modalRef.instance.data.password || options.defaultValue[1];
      } else {
        text = options.defaultValue[0];
        password = options.defaultValue[1];
      }

>>>>>>> upstream/master
      if (type === 'login-password') {
        return func(text, password);
      } else if (type === 'secure-text') {
        return func(password);
      }
      return func(text);
    }

    let actions;
    if (typeof callbackOrActions === 'function') {
      actions = [
        { text: 'Cancel' },
        {
          text: 'OK',
          onPress: () => {
            getArgs(this, callbackOrActions);
          }
        }
      ];
    } else {
      actions = callbackOrActions.map(item => {
        return {
          text: item.text,
          onPress: () => {
            if (item.onPress) {
              return getArgs(this, item.onPress);
            }
          }
        };
      });
    }

    const footer = getFooter.call(this, actions);
    const config = Object.assign({
      title: title,
      message: message,
      type: type ? type : 'default',
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });
<<<<<<< HEAD
    const props = Modal._initConfig(config, options);
    return Modal._open(props);
  }

  static operation(actions?: any, platform?: string): any {
=======
    const props = this._initConfig(config, options);
    return this._open(props);
  }

  operation(actions?: any, platform?: string): any {
>>>>>>> upstream/master
    const options: ModalOptions = new ModalOptions();
    options.visible = true;
    options.transparent = true;
    options.closable = false;
    options.maskClosable = false;
    options.operation = true;
    options.className = 'am-modal-operation';
    const footer = getFooter.call(this, actions);

    const config = Object.assign({
      footer: footer,
      actions: footer,
      platform: platform ? platform : 'ios'
    });
<<<<<<< HEAD
    const props = Modal._initConfig(config, options);
    return Modal._open(props);
  }

  static close() {
    Modal.hidePopup();
=======
    const props = this._initConfig(config, options);
    return this._open(props);
  }

  close() {
    this.hidePopup();
>>>>>>> upstream/master
  }
}

function getFooter(actions) {
<<<<<<< HEAD
  let action = actions ? actions :  [{ text: 'OK', onPress: () => {}}];
=======
  let action = actions ? actions : [{ text: 'OK', onPress: () => {} }];
>>>>>>> upstream/master
  return action.map((button: Action) => {
    const orginPress = button.onPress || function() {};
    button.onPress = () => {
      const res = orginPress();
      if (res && res.then) {
        res.then(() => {
          this.closeWithAnimation();
        });
      } else {
        this.closeWithAnimation();
      }
    };
    return button;
  });
}
