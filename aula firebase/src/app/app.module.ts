import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AddMecanicaPage } from '../pages/add-mecanica/add-mecanica';

export const firebaseConfig = {
  
    apiKey: "AIzaSyCKL_A51lQ9t5DgDD4t3UhYGwDpFIFCby0",
    authDomain: "bancoionic-510b6.firebaseapp.com",
    databaseURL: "https://bancoionic-510b6.firebaseio.com",
    projectId: "bancoionic-510b6",
    storageBucket: "bancoionic-510b6.appspot.com",
    messagingSenderId: "423360057514"
 
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddMecanicaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddMecanicaPage
    

    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
