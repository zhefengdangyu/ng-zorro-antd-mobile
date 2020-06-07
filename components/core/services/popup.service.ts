import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
<<<<<<< HEAD

@Injectable()
export class PopupService {
  static overlay: Overlay = null;
  static overlayRef: OverlayRef = null;

  constructor(
    public _overlay: Overlay,
  ) {
    PopupService.overlay = this._overlay;
  }

  static showPopup(
    component,
    childInjector?: Injector,
    hasBackdrop?: boolean,
    positionStrategy: GlobalPositionStrategy =
    PopupService.overlay.position().global().centerVertically().centerHorizontally()): ComponentRef<any> {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = hasBackdrop;
    overlayConfig.positionStrategy = positionStrategy;
    PopupService.overlayRef = PopupService.overlay.create(overlayConfig);
    PopupService.overlayRef.backdropClick().subscribe(() => {
      PopupService.overlayRef.dispose();
    });

    return PopupService.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
  }

  static hidePopup(): void {
    if (PopupService.overlayRef) {
      PopupService.overlayRef.dispose();
=======
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PopupService {
  overlay: Overlay = null;
  overlayRef: OverlayRef = null;
  currentServiceName = null;
  serviceArray: any = [];

  constructor(public _overlay: Overlay) {
    this.overlay = this._overlay;
  }

  showPopup(
    component,
    childInjector?: Injector,
    hasBackdrop?: boolean,
    positionStrategy: GlobalPositionStrategy = this.overlay
      .position()
      .global()
      .centerVertically()
      .centerHorizontally()
  ): ComponentRef<any> {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = hasBackdrop;
    overlayConfig.positionStrategy = positionStrategy;
    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => {
      this.hidePopup();
    });
    return this.overlayRef.attach(new ComponentPortal(component, undefined, childInjector));
  }

  hidePopup(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
>>>>>>> upstream/master
    }
  }
}
