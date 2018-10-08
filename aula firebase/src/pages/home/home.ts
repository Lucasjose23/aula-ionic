import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddMecanicaPage } from '../add-mecanica/add-mecanica';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mecanicas:Observable<any[]>;//qualquer tipo


  constructor(public navCtrl: NavController,public db:AngularFireDatabase) {
    this.mecanicas=db.list('mecanicas').valueChanges();

  }
  goAddMecanica(){
    this.navCtrl.push(AddMecanicaPage);
  }

}
