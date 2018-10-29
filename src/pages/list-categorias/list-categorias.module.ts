import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListCategoriasPage } from './list-categorias';

@NgModule({
  declarations: [
    ListCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListCategoriasPage),
  ],
})
export class ListCategoriasPageModule {}
