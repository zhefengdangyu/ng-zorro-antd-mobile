import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
<<<<<<< HEAD:scripts/site/_site/src/app/app.module.ts
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
=======
// import { ServiceWorkerModule } from '@angular/service-worker';
import { NZ_CONFIG, NZ_ICONS, NzConfig } from 'ng-zorro-antd';
>>>>>>> upstream/master:scripts/site/_site/src/app/app.module.ts
import { ShareModule } from './share/share.module';
import { IconDefinition } from '@ant-design/icons-angular';

import { AppComponent } from './app.component';
import { DEMOComponent } from './_demo/demo.component';
import { routes } from './app.routing.module';
import { environment } from '../environments/environment';
<<<<<<< HEAD:scripts/site/_site/src/app/app.module.ts
import { NgZorroAntdMobileModule, ModalServiceComponent, ToastComponent, ActionSheetComponent  } from 'ng-zorro-antd-mobile';

import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';

=======
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { LeftOutline, RightOutline } from '@ant-design/icons-angular/icons';

const ngZorroConfig: NzConfig = {
  icon: { nzTwotoneColor: '#1890ff' }
};
>>>>>>> upstream/master:scripts/site/_site/src/app/app.module.ts
const icons: IconDefinition[] = [ LeftOutline, RightOutline ];

@NgModule({
  declarations: [
    AppComponent, DEMOComponent
  ],
  imports     : [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
<<<<<<< HEAD:scripts/site/_site/src/app/app.module.ts
    NgZorroAntdModule,
    NgZorroAntdMobileModule.forRoot(),
    RouterModule.forRoot(routes, environment.production ? { useHash: true, preloadingStrategy: PreloadAllModules } : {useHash: true}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
=======
    NgZorroAntdMobileModule,
    RouterModule.forRoot(routes, environment.production ? { useHash: true, preloadingStrategy: PreloadAllModules } : {useHash: true}),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
>>>>>>> upstream/master:scripts/site/_site/src/app/app.module.ts
  ],
  providers   : [
    Title,
    { provide: NZ_ICONS, useValue: icons },
<<<<<<< HEAD:scripts/site/_site/src/app/app.module.ts
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#1890ff' }
  ],
  bootstrap   : [ AppComponent ],
  entryComponents: [ToastComponent, ActionSheetComponent, ModalServiceComponent]
=======
    { provide: NZ_CONFIG, useValue: ngZorroConfig }
  ],
  bootstrap   : [ AppComponent ]
>>>>>>> upstream/master:scripts/site/_site/src/app/app.module.ts
})
export class AppModule {
}
