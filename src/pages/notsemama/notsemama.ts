import { NotsemanaProvider } from './../../providers/notsemana/notsemana';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-notsemama',
  templateUrl: 'notsemama.html',
})
export class NotsemamaPage {
  categorias: Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              // private toast: ToastController,
              private notsemanaProvider: NotsemanaProvider) {

                this.categorias = this.notsemanaProvider.getAll();
              }


  // newCategorias(){
  //   this.navCtrl.push('EditnotsemamaPage');

  // }
  // editCategorias(categoria: any){
  //   this.navCtrl.push('EditnotsemamaPage', { categoriakey: categoria.key});

  // }
  // removeCategorias(key:string){
  //   this.categoriasProvider.remove(key);
  //   this.toast.create({message:'Categoria removida com sucesso!!!', duration:3000}).present();
  // }

}
