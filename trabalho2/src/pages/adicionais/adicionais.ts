import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdicionaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionais',
  templateUrl: 'adicionais.html',
})
export class AdicionaisPage {

  Tamanhos=[
    {nome:'pequeno',preco:20},
    {nome:'medio',preco:30},
    {nome:'grande',preco:40}

  ];
  pizza;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pizza=navParams.get('pizza');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaisPage');
  }

}
