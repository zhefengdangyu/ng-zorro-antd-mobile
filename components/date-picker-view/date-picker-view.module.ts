import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePickerViewComponent } from './date-picker-view.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { DatePickerModule } from '../date-picker/date-picker.module';
import { ToastModule } from '../toast/toast.module';
<<<<<<< HEAD
import { ToastComponent } from '../toast/toast.component';
=======
>>>>>>> upstream/master

@NgModule({
  imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerViewComponent],
<<<<<<< HEAD
  declarations: [DatePickerViewComponent],
  entryComponents: [ToastComponent],
  providers: [LocaleProviderModule]
=======
  declarations: [DatePickerViewComponent]
>>>>>>> upstream/master
})
export class DatePickerViewModule {}
