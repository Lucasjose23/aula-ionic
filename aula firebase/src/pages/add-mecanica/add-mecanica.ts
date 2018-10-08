import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

/**
 * Generated class for the AddMecanicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-mecanica',
  templateUrl: 'add-mecanica.html',
})
export class AddMecanicaPage {
 mecanica ={ nome:'', marca:'',contato:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public db:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMecanicaPage');
  }
  salvar(){
    this.db.list('mecanicas').push(this.mecanica);
  }

}
