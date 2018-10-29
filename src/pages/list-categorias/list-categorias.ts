import { CategoriasProvider } from './../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
// import { isPresent } from '../../../../node_modules/ionic-angular/umd/util/util';


@IonicPage()
@Component({
  selector: 'page-list-categorias',
  templateUrl: 'list-categorias.html',
})
export class ListCategoriasPage {

  categorias: Observable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private toast: ToastController,
              private categoriasProvider: CategoriasProvider) {

                this.categorias = this.categoriasProvider.getAll();
              }


  newCategorias(){
    this.navCtrl.push('EditCategoriasPage');

  }
  editCategorias(categoria: any){
    this.navCtrl.push('EditCategoriasPage', { categoriakey: categoria.key});

  }
  removeCategorias(key:string){
    this.categoriasProvider.remove(key);
    this.toast.create({message:'Categoria removida com sucesso!!!', duration:3000}).present();
  }

}
