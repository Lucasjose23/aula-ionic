import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMecanicasPage } from './lista-mecanicas';

@NgModule({
  declarations: [
    ListaMecanicasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMecanicasPage),
  ],
})
export class ListaMecanicasPageModule {}
