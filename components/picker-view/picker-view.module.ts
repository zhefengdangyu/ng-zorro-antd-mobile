import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PickerViewComponent } from './picker-view.component';
import { PickerModule } from '../picker/picker.module';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
@NgModule({
<<<<<<< HEAD
  imports: [
    FormsModule,
    CommonModule,
    PickerModule,
    LocaleProviderModule
  ],
=======
  imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule],
>>>>>>> upstream/master
  exports: [PickerViewComponent],
  declarations: [PickerViewComponent]
})
export class PickerViewModule {}
