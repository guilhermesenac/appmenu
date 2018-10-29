import { NotsemanaProvider } from './../../providers/notsemana/notsemana';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-editnotsemama',
  templateUrl: 'editnotsemama.html',
})
export class EditnotsemamaPage {
  title:string;
  form: FormGroup;
  categoria:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private notsemanaProvider: NotsemanaProvider) {  
    this.categoria = this.navParams.data.categoria || {};
    this.SetupPageTitle();
    this.createForm();    
    
    const consulta = this.notsemanaProvider.get(this.navParams.data.categoriakey).subscribe((Data: any) => {
      consulta.unsubscribe();
      this.categoria = Data;
      this.createForm();

    });

  }

  private SetupPageTitle(){
    if(this.navParams.data.categoria){
      this.title = 'Alterando categoria';
    } else{
      this.title = 'Nova categoria';
    }
  }

  private createForm(){
    this.form = this.formBuilder.group({
      key:[this.categoria.key],
      titulo:[this.categoria.titulo, Validators.required],
      descricao:[this.categoria.descricao, Validators.required]
    })
  }

    onSubmit(){
      if(this.form.valid){
        this.notsemanaProvider.save(this.form.value);
        this.toast.create({message: 'Categoria salva com sucesso',duration:3000}).present();
        this.navCtrl.pop();
      }
    }
 
}
