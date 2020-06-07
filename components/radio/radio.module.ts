import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';
import { ListModule } from '../list/list.module';
<<<<<<< HEAD
import { RadioItemGroup } from "./radio-item-group.component";
import { RadioItem } from './radio-item.component';
=======
import { RadioItemGroupComponent } from './radio-item-group.component';
import { RadioItemComponent } from './radio-item.component';
>>>>>>> upstream/master
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FormsModule, ListModule],
<<<<<<< HEAD
  declarations: [Radio, RadioItem, RadioItemGroup],
  exports: [Radio, RadioItem, RadioItemGroup]
=======
  declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
  exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
>>>>>>> upstream/master
})
export class RadioModule {}
