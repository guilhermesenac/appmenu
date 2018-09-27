import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  form: FormGroup;

  constructor(public navCtrl: NavController,
               private formBuilder: FormBuilder,
               private auth: UserProvider,
               private toast: ToastController,
               public navParams: NavParams) {

        this.createForm();        
   
  }
  private createForm(){
    this.form = this.formBuilder.group({
      nome:['', Validators.required],
      nascimento:[''],
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });

  }

  onSubmit(){
    if(this.form.valid) {
      this.auth.createAccount(this.form.value)
      .then( () => {
        this.toast
        .create({message:'Conta criada com sucesso. E-mail de confirmação enviada!', duration:6000}).present();
        this.navCtrl.pop();
      })
      .catch(message => {
        this.toast.create({message: message, duration: 3000}).present();
      })
        
      
    }
  }
  onClose(){
  this.navCtrl.pop();
  }
}
