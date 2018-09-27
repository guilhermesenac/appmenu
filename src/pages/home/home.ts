import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string;
    constructor(public navCtrl: NavController,
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

}
