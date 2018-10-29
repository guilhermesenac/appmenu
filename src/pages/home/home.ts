import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string;
    constructor(public navCtrl: NavController,
                public menu: MenuController,
                private auth: AngularFireAuth) {

 }
 ionViewDidLoad(){
   const userState = this.auth.authState.subscribe( user=> {
     if (user){
       this.userName = user.displayName;
       userState.unsubscribe();
      }
    })
  }

  ionViewDidEnter(){
    this.menu.enable(false);
  }
  ionViewWillLeave(){
    this.menu.enable(true);
  }



}