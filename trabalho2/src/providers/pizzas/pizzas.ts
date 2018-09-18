import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PizzasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PizzasProvider {
  pizzasT = [
    {id:1, nome:'Mussarela'},
    {id:2, nome:'Presunto'},
   
  ];
  pizzasE = [
    {id:1, nome:'Salmão'},
    {id:2, nome:'Mineira'},
   
  ];
  pizzasD = [
    {id:1, nome:'Chocolate'},
    {id:2, nome:'Banana'},
   
  ];
  adicionais= [
    {id:1,nome:'Milho',preco:2.50},
    {id:2,nome:'Bacon',preco:3.50},
    {id:3,nome:'Catupiri',preco:1.50}
  ]


  constructor() {
    console.log('Hello PizzasProvider Provider');
  }

  getPizzasT(){
    return this.pizzasT;
    
  }
  getPizzasE(){
    return this.pizzasE;
    
  }
  getPizzasD(){
    return this.pizzasD;
    
  }
  getAdd(){
    return this.adicionais;
  }

}
