import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ModalWinPage } from '../../modals/modal-win/modal-win.page';
import { ModalInfoPage } from 'src/app/modals/modal-info/modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,ModalWinPage,ModalInfoPage],
  entryComponents: [ModalWinPage,ModalInfoPage]
})
export class HomePageModule {}
