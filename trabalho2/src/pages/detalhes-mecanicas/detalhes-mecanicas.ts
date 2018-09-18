import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesMecanicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-mecanicas',
  templateUrl: 'detalhes-mecanicas.html',
})
export class DetalhesMecanicasPage {
  mecanica;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mecanica = navParams.get('mecanica');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesMecanicasPage');
  }

}
