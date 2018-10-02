import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MecanicasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MecanicasProvider {
  mecanicas = [
    {id:1, nome:'Conserta Tudo', marcas:'Todas', contato:'1234'},
    {id:2, nome:'Conserta Quase Tudo', marcas:'Quase Todas', contato:'4321'},
    {id:3, nome:'Conserta Metade', marcas:'Metade', contato:'2341'},
    {id:4, nome:'Conserta Nada', marcas:'Nada', contato:'3412'}
  ];


  constructor() {
    console.log('Hello MecanicasProvider Provider');
  }
  getMecanicas(){
    return this.mecanicas;

  }
  getMecanica(id){
    return this.mecanicas.find(n => {return n.id===id});
  }

}
