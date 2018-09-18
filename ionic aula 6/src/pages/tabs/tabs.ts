import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaMecanicasPage } from '../lista-mecanicas/lista-mecanicas';
import { SobrePage } from '../sobre/sobre';
import { ListaPecasPage } from '../lista-pecas/lista-pecas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = ListaMecanicasPage;
  tab2 = ListaPecasPage;
  tab3 = SobrePage;


}
