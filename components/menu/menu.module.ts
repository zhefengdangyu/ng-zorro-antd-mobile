import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '../flex/flex.module';
import { ListModule } from '../list/list.module';
import { RadioModule } from '../radio/radio.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ButtonModule } from '../button/button.module';
import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { FormsModule } from '@angular/forms';

@NgModule({
<<<<<<< HEAD
  imports: [CommonModule, FlexModule, ListModule, RadioModule, CheckboxModule, ButtonModule, LocaleProviderModule, FormsModule],
=======
  imports: [
    CommonModule,
    FlexModule,
    ListModule,
    RadioModule,
    CheckboxModule,
    ButtonModule,
    LocaleProviderModule,
    FormsModule
  ],
>>>>>>> upstream/master
  exports: [MenuComponent, SubMenuComponent],
  declarations: [MenuComponent, SubMenuComponent]
})
export class MenuModule {}
