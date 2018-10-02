import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConcluirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-concluir',
  templateUrl: 'concluir.html',
})
export class ConcluirPage {
  preco;
  nome;
  endereco;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.preco=navParams.get('valor');
  }

  ionViewDidLoad() {
    console.log(this.preco);
  }
  alerta(){
      alert(this.nome+"  o valor da sua compra é R$"+this.preco+" entrege no endereco: "+this.endereco);
  }

}
