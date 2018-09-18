import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  gasolina:number;
  etanol:number;
  mensagem:string;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }
  calcular(){
    let resultado= this.etanol/this.gasolina;
    if(resultado<0.7)
      this.mensagem="Etanol";
    else
      this.mensagem="gasolina";  
      this.mostrarToast();
    


  }
  mostrarToast(){
    let toast=this.toastCtrl.create({
      message:this.mensagem,
      duration:3000,
      position:'top'
    });
    toast.present();

  }



}
