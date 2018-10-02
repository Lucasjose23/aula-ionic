import { Component } from '@angular/core';
import { SobrePage } from '../sobre/sobre';
import { PizzasPage } from '../pizzas/pizzas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = PizzasPage;
  tab2 = SobrePage;

}
