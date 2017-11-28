import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoadingController } from 'ionic-angular';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  storage = firebase.storage();

  constructor(public http: HttpClient, public fb: AngularFireDatabase, public loadingCtrl: LoadingController) {
  }

  getComida(){
    return this.fb.list('comidas').valueChanges();
  }

  getComidaByID(id){
    return this.fb.object('comidas/'+id).valueChanges();
  }

  borrar(id){
    return this.fb.object('comidas/'+ id).remove();
  }

agregarPlato(nombre, proteinas, ch, grasas, calorias, img: File){
  let alertc = this.loadingCtrl.create({
    content: 'Subiendo archivo'
  });
  
  const plato = this.fb.database.ref('comidas').push();
  const storageRef = this.storage.ref()
  var task = storageRef.child('IMAGE/'+plato.key).put(img)
  task.on(firebase.storage.TaskEvent.STATE_CHANGED, 
  (snap) => {
    alertc.present();
  }, error => {
    plato.remove()
    alert(error)
  }, () => {
    var data = {
      "image": task.snapshot.downloadURL,
      "calorias" : calorias,
      "ch" : ch,
      "grasas" : grasas,
      "id" : plato.key,
      "nombre" : nombre,
      "proteinas" : proteinas
    }
    plato.set(data)
    alertc.dismiss()
  })

  

}


}
