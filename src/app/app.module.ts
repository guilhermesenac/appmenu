import { NotsemanaProvider } from './../providers/notsemana/notsemana';
import { CategoriasProvider } from './../providers/categorias/categorias';
import { CalculosDirective } from './../providers/calculos/calculos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';

import { OneSignal } from '@ionic-native/onesignal';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    //FIREBASE

    AngularFireModule.initializeApp({

      apiKey: "AIzaSyBouGfg9CXZPE_DKlFpOjVZJXYbG1DPmsY",
      authDomain: "appmobile-91388.firebaseapp.com",
      databaseURL: "https://appmobile-91388.firebaseio.com",
      projectId: "appmobile-91388",
      storageBucket: "appmobile-91388.appspot.com",
      messagingSenderId: "235665947410"
      

    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  //ACABA FIREBASE
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider, CalculosDirective, OneSignal, CategoriasProvider, NotsemanaProvider
  ]
})
export class AppModule {}
