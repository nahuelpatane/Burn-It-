import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  comidas
  comida

  disabled: Boolean = true

  constructor(public navCtrl: NavController, public db: FirebaseProvider) {
    this.comidas = this.db.getComida().subscribe( c => {
      this.comidas = c
      this.disabled = false
    })
  }

  async random() {
    var keys = []
    this.comidas.forEach(element => {
      keys.push(element)
    });
    var r = Math.floor((Math.random() * keys.length) + 1);
    this.comida = keys[r]
    console.log(this.comida)
  }

}
