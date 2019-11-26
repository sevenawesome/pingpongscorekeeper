import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';

@NgModule({
  exports:[ModalInfoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
