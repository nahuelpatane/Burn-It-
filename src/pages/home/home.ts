import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ModalController, NavParams } from 'ionic-angular';
import { ModalPage } from '../../pages/modal/modal'
import { AddPage } from '../add/add';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comidas: Observable<any[]>

  constructor(public navCtrl: NavController, public db: FirebaseProvider, public modalCtrl: ModalController) {
      this.comidas = this.db.getComida()
  }

  modal(comida){
    let comidaModal = this.modalCtrl.create( ModalPage , { 'comida': comida });
    comidaModal.present();
  }



  mostrarForm(){
    this.navCtrl.push(AddPage)
}  

    

}