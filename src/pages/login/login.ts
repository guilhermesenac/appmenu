import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form: FormGroup;
  userName: string;

  constructor(public navCtrl: NavController,
               private formBuilder: FormBuilder,
               private auth: AngularFireAuth,
               private toast: ToastController,
               private accountProvider: UserProvider,
               public navParams: NavParams) {

        this.createForm();        
   
  }
  private createForm(){
    this.form = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });

  }
  onSubmit(){
    if(this.form.valid) {
      this.accountProvider.login(this.form.value)
      .then((user:any) => {
        if(user.emailVerified){
          this.navCtrl.setRoot(HomePage);
        }else{
          this.toast
        .create({message:'Seu e-mail ainda não foi verificado. Por favor acesse seu e-mail e clique no link para verificar conta.', duration:6000}).present();
        }
        
      })
      .catch(message => {
        this.toast.create({message: message, duration: 3000}).present();
      })
      
      
    }
  }
  signOut(){
    this.auth.auth.signOut();
    const userState= this.auth.authState.subscribe( user =>{
      if(!user){
        this.userName = '';
        this.navCtrl.setRoot(HomePage);
        userState.unsubscribe();
      }
    })
  }

}


