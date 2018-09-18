import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesMecanicasPage } from '../detalhes-mecanicas/detalhes-mecanicas';
import { MecanicasProvider } from '../../providers/mecanicas/mecanicas';

/**
 * Generated class for the ListaMecanicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-mecanicas',
  templateUrl: 'lista-mecanicas.html',
})
export class ListaMecanicasPage {

  mecanicas;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mecani: MecanicasProvider) {
    this.mecanicas=mecani.getMecanicas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMecanicasPage');
  }

  verDetalhes(mecanicaSelecioda){
    this.navCtrl.push(DetalhesMecanicasPage, {mecanica: mecanicaSelecioda});
  }

}
