import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';


/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  nombre: string
  calorias
  ch
  proteinas
  grasas


  constructor(public navCtrl: NavController, public navParams: NavParams, public db: FirebaseProvider) {
  }

  ionViewDidLoad() {
  }

  async enviar() {
    try {
      await this.db.agregarPlato(this.nombre, this.proteinas, this.ch, this.grasas, this.calorias)
      this.navCtrl.pop();      
    }
    catch (error) {
      alert(error.message)
    }
  }

}
