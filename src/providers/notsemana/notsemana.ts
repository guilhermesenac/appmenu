import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NotsemanaProvider {
   private PATH = 'notsemana/';

  constructor(private db:AngularFireDatabase) {  }

  getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map( c=>({ key: c.key, ...c.payload.val() }));
      })
  }

  get(key:string){
      return this.db.object(this.PATH + key)
      .snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      })

  }

  save(categoriaData:any){
    const categoria = {
      nome: categoriaData.nome
    };

    if(categoriaData.key){
      this.db.list(this.PATH).update(categoriaData.key, categoria);
    } else{
      this.db.list(this.PATH).push(categoria);
    }

  }

  remove(key:string){
    this.db.list(this.PATH).remove(key);
  }

}
