import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { TabsComponent } from './tabs.component';
import { TabPaneComponent } from './tab-pane.component';
import { TabPaneBodyComponent } from './tab-pane-body.component';
import { DefaultTabBarComponent } from './default-tab-bar.component';

<<<<<<< HEAD
export { TabPane } from './tab-pane.component';
=======
export { TabPaneComponent } from './tab-pane.component';
>>>>>>> upstream/master

@NgModule({
  imports: [CommonModule, ObserversModule],
  declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
  exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
  providers: []
})
export class TabsModule {}
