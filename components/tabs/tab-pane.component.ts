import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'TabPane, nzm-tab-pane',
<<<<<<< HEAD
  templateUrl: './tab-pane.component.html',
  styles: [`:host {touch-action: auto}`],
  host: {
    '[@translateTabPane]': 'position',
    '(@translateTabPane.start)': 'onTranslateTabStarted($event)',
    '(@translateTabPane.done)': 'onTranslateTabComplete($event)'
  },
  animations: [
    trigger('translateTabPane', [
      state(
        'left-with-animation',
        style({
          transform: 'translate3d(-100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'left-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          transform: 'translate3d(-100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('left-without-animation', style({transform: 'translate3d(-100%, 0, 0)' })),
      state(
        'right-with-animation',
        style({
          transform: 'translate3d(100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'right-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          transform: 'translate3d(100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('right-without-animation', style({transform: 'translate3d(100%, 0, 0)' })),
      state(
        'top-with-animation',
        style({
          transform: 'translate3d(0, -100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'top-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          transform: 'translate3d(0, -100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('top-without-animation', style({ transform: 'translate3d(0, -100%, 0)' })),
      state(
        'bottom-with-animation',
        style({
          transform: 'translate3d(0, 100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'bottom-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          transform: 'translate3d(0, 100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('bottom-without-animation', style({ transform: 'translate3d(0, 100%, 0)' })),
      state(
        'center-with-animation',
        style({
          'z-index': 100,
          transform: 'translate3d(0, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('center-without-animation', style({ transform: 'translate3d(0, 0, 0)' }))
    ])
  ]
=======
  templateUrl: './tab-pane.component.html'
>>>>>>> upstream/master
})
export class TabPaneComponent {
  public isTitleString: boolean = true;

  private _title: string | TemplateRef<void>;

  @ViewChild('content', { static: true }) content: TemplateRef<void>;

  @Input()
  get title(): string | TemplateRef<void> {
    return this._title;
  }
  set title(value: string | TemplateRef<void>) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }

  constructor() {}
}
