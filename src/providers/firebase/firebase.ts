import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  storage = firebase.storage();

  constructor(public http: HttpClient, public fb: AngularFireDatabase) {
  }


  getComida() {
    return this.fb.list('comidas').valueChanges()
  }

  getComidaByID(id) {
    return this.fb.object('comidas/' + id).valueChanges();
  }

  getRandom() {
    var keys = []
    this.getComida().subscribe(c => {
      c.forEach(e => {
        var k = JSON.stringify(e['id']).split('"')[1];
        console.log(k + ' ' + e['nombre'])
        keys.push(k)
      })     
      var r = Math.floor((Math.random() * keys.length) + 1);
      console.log(keys[r])
      return keys[r]
    })

  }

  borrar(id) {
    return this.fb.object('comidas/' + id).remove();
  }

  agregarPlato(nombre, proteinas, ch, grasas, calorias, img: File) {
    const plato = this.fb.database.ref('comidas').push();
    const storageRef = this.storage.ref()
    var task = storageRef.child('IMAGE/' + plato.key).put(img)
    task.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snap) => {
        alert("Subiendo")
      }, error => {
        plato.remove()
        alert(error)
      }, () => {
        var data = {
          "image": task.snapshot.downloadURL,
          "calorias": calorias,
          "ch": ch,
          "grasas": grasas,
          "id": plato.key,
          "nombre": nombre,
          "proteinas": proteinas
        }
        plato.set(data)

      })



  }


}
