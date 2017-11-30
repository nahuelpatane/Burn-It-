import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  comida

  constructor(public navCtrl: NavController, public db: FirebaseProvider) {
  }

  async random() {
    this.comida = this.db.getRandom()
    console.log(this.comida)
  }

}
