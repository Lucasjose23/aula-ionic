import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzasProvider } from '../../providers/pizzas/pizzas';
import { AdicionaisPage } from '../adicionais/adicionais';

/**
 * Generated class for the PizzasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzas',
  templateUrl: 'pizzas.html',
})
export class PizzasPage {
  pizzasT;
  pizzasE;
  pizzasD;
  adicionais;
  constructor(public navCtrl: NavController, public navParams: NavParams, public pizPro:PizzasProvider) {
    this.pizzasT=pizPro.getPizzasT();
    this.pizzasE=pizPro.getPizzasE();
    this.pizzasD=pizPro.getPizzasD();
    this.adicionais=pizPro.getAdd();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzasPage');
  }

  verDetalhes(pizzaSelecioda){
    this.navCtrl.push(AdicionaisPage, {pizza: pizzaSelecioda});
  }

  

}
