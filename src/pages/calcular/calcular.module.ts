import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcularPage } from './calcular';

@NgModule({
  declarations: [
    CalcularPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcularPage),
  ],
})
export class CalcularPageModule {}
