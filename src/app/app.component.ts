import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OneSignal } from '@ionic-native/onesignal';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private oneSignal: OneSignal) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: "home", title: 'Home', component: HomePage },
      { icon: "person-add", title: 'Cadastro', component: 'CadastroPage' },
      { icon: "person", title: 'Login', component: 'LoginPage' },
      { icon: "build", title: 'Reset', component: 'ResetpassowrdPage' },
      { icon: "calculator", title: 'Calcular IMC', component: 'CalcularPage' },
      { icon: "paper", title: 'O que é IMC', component: 'NoticiasPage' },
      { icon: "exit", title: 'Sair', component: HomePage }
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.configurePushNotification();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  configurePushNotification(){
    window["plugins"].OneSignal
      .startInit('55c5058f-cd7a-4584-b4b4-4064d9784448', '235665947410');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);


        this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
        });
        
        //
        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });

        this.oneSignal.endInit();

  }
}









