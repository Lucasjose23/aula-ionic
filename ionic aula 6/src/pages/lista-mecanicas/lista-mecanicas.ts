import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesMecanicasPage } from '../detalhes-mecanicas/detalhes-mecanicas';

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

  mecanicas = [
    {id:1, nome:'Conserta Tudo', marcas:'Todas', contato:'1234'},
    {id:2, nome:'Conserta Quase Tudo', marcas:'Quase Todas', contato:'4321'},
    {id:3, nome:'Conserta Metade', marcas:'Metade', contato:'2341'},
    {id:4, nome:'Conserta Nada', marcas:'Nada', contato:'3412'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMecanicasPage');
  }

  verDetalhes(mecanicaSelecioda){
    this.navCtrl.push(DetalhesMecanicasPage, {mecanica: mecanicaSelecioda});
  }

}
