import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzasProvider } from '../../providers/pizzas/pizzas';
import { ConcluirPage } from '../concluir/concluir';

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
  aux=0;


  tamanhos=[
    {nome:'pequeno',preco:20},
    {nome:'medio',preco:30},
    {nome:'grande',preco:40}

  ];
  pizza;
  adicionais;
  somatoria=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public pizPro:PizzasProvider) {
    this.pizza=navParams.get('pizza');
    this.adicionais=pizPro.getAdd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaisPage');
  }
  somaTamanho(tamanho){

    if(tamanho!=this.aux)
    {
      this.somatoria-=this.aux;
      this.somatoria+=tamanho;
      this.aux=tamanho;
    }
    
 
   
  }
  soma(adicional)
  {
    if(adicional.checked){
    this.somatoria+=adicional.preco;
    
    }
    else{
      this.somatoria-=adicional.preco;
    }

  }
  concluir()
  {
    this.navCtrl.push(ConcluirPage, {valor: this.somatoria});
  }

}
