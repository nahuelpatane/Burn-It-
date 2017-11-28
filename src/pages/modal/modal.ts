import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  comida;

  constructor(private alertCtrl: AlertController, public vcont: ViewController, public navCtrl: NavController, public navParams: NavParams, public db: FirebaseProvider) {
    this.comida = this.navParams.get('comida');
  }

  ionViewDidLoad() {
  }

  close(){
    this.vcont.dismiss()
  }

  eliminar(){
    let alert = this.alertCtrl.create({
      message: 'Desea eliminar ' + this.comida.nombre + '?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Borrar',
          handler: () => {
            this.db.borrar(this.comida.id).then( () => {
              this.navCtrl.pop()
            })
          }
        }
      ]
    });
    alert.present();
  }

}
