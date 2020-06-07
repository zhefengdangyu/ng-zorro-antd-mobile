import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule} from '@angular/common';
import { ModalComponent, ModalServiceComponent } from './modal.component';
=======
import { CommonModule } from '@angular/common';
import { ModalComponent, ModalServiceComponent } from './modal.component';
import { ModalService } from './modal.service';
>>>>>>> upstream/master
import { ListModule } from '../list/list.module';
import { WingBlankModule } from '../wing-blank/wing-blank.module';
import { WhiteSpaceModule } from '../white-space/white-space.module';
import { ButtonModule } from '../button/button.module';
import { InputItemModule } from '../input-item/input-item.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertOptions } from './modal-options.provider';
<<<<<<< HEAD
@NgModule({
  imports: [CommonModule, ListModule, WingBlankModule, WhiteSpaceModule, ButtonModule, InputItemModule, FormsModule, ReactiveFormsModule],
  exports: [ModalComponent, ModalServiceComponent],
  declarations: [ModalComponent, ModalServiceComponent],
  providers: [AlertOptions]
=======
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupService } from '../core/services/popup.service';
@NgModule({
  imports: [
    CommonModule,
    ListModule,
    WingBlankModule,
    WhiteSpaceModule,
    ButtonModule,
    InputItemModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [ModalComponent, ModalServiceComponent],
  declarations: [ModalComponent, ModalServiceComponent],
  providers: [AlertOptions, ModalService, PopupService]
>>>>>>> upstream/master
})
export class ModalModule {}
