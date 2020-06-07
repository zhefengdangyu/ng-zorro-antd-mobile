import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD:scripts/site/_site/src/app/share/nz-nav-bottom/nz-nav-bottom.module.ts
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzNavBottomComponent } from './nz-nav-bottom.component';

@NgModule({
  imports     : [ CommonModule, RouterModule, NgZorroAntdModule ],
=======
import { NzIconModule } from 'ng-zorro-antd';
import { NzNavBottomComponent } from './nz-nav-bottom.component';

@NgModule({
  imports     : [ CommonModule, RouterModule, NzIconModule ],
>>>>>>> upstream/master:scripts/site/_site/src/app/share/nz-nav-bottom/nz-nav-bottom.module.ts
  declarations: [ NzNavBottomComponent ],
  exports     : [ NzNavBottomComponent ]
})
export class NzNavBottomModule {

}
