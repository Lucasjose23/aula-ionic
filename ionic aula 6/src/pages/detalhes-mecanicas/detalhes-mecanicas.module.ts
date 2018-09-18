import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesMecanicasPage } from './detalhes-mecanicas';

@NgModule({
  declarations: [
    DetalhesMecanicasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesMecanicasPage),
  ],
})
export class DetalhesMecanicasPageModule {}
