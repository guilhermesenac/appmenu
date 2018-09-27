import { CalculosDirective } from './../../providers/calculos/calculos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//import { DirectivesModule } from '../../directives/directives.module';


/**
 * Generated class for the CalcularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcular',
  templateUrl: 'calcular.html',
})
export class CalcularPage {
    peso: number = 0;
    altura: number = 0;
    imc: number = 0;
    condicao: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calcular(){
    this.imc = CalculosDirective.calcularImc( this.altura, this.peso );
    this.condicao = CalculosDirective.informarImc(this.imc);
  }

}
