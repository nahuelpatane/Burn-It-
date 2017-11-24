import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public fb: AngularFireDatabase) {
  }

  getComida(){
    return this.fb.list('comidas').valueChanges();
  }

  getComidaByID(id){
    return this.fb.object('comidas/'+id).valueChanges();
  }

agregarPlato(nombre, proteinas, ch, grasas, calorias){
  const plato = this.fb.database.ref('comidas').push();
  var data = {
    "calorias" : calorias,
    "ch" : ch,
    "grasas" : grasas,
    "id" : plato.key,
    "nombre" : nombre,
    "proteinas" : proteinas
  }
  plato.set(data)

}


}
