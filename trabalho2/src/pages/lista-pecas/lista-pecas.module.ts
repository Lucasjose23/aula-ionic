import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPecasPage } from './lista-pecas';

@NgModule({
  declarations: [
    ListaPecasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPecasPage),
  ],
})
export class ListaPecasPageModule {}
