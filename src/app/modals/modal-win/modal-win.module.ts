import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalWinPage } from './modal-win.page';


@NgModule({
  exports:[ModalWinPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ModalWinPage]
})
export class ModalWinPageModule {}
