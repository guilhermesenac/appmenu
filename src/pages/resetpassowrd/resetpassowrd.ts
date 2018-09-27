import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@IonicPage()
@Component({
  selector: 'page-resetpassowrd',
  templateUrl: 'resetpassowrd.html',
})
export class ResetpassowrdPage {
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
    })
  }

  onSubmit(){
    if(this.form.valid) {
      this.accountProvider.forgotEmail(this.form.value.email)
      .then((user:any) => {
        this.toast.create({message:'Um e-mail foi enviado para que você resete sua senha.', duration:6000}).present();
        this.navCtrl.pop();
        })
      .catch(message => {
        this.toast.create({message: message, duration: 3000}).present();
      })
           
    }
  }
}

      
      
    








