import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaMecanicasPage } from '../pages/lista-mecanicas/lista-mecanicas';
import { DetalhesMecanicasPage } from '../pages/detalhes-mecanicas/detalhes-mecanicas';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsPage } from '../pages/tabs/tabs';
import { ListaPecasPage } from '../pages/lista-pecas/lista-pecas';
import { MecanicasProvider } from '../providers/mecanicas/mecanicas';
import { PizzasProvider } from '../providers/pizzas/pizzas';
import { PizzasPage } from '../pages/pizzas/pizzas';
import { AdicionaisPage } from '../pages/adicionais/adicionais';
import { ConcluirPage } from '../pages/concluir/concluir';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaMecanicasPage,
    DetalhesMecanicasPage,
    ListaPecasPage,
    SobrePage,
    PizzasPage,
    AdicionaisPage,
    ConcluirPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaMecanicasPage,
    DetalhesMecanicasPage,
    ListaPecasPage,
    SobrePage,
    PizzasPage,
    AdicionaisPage,
    ConcluirPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MecanicasProvider,
    PizzasProvider
  ]
})
export class AppModule {}
