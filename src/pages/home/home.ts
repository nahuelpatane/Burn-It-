import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comidas: Observable<any[]>

  constructor(public navCtrl: NavController, public db: FirebaseProvider) {
      this.comidas = this.db.getComida()
  }

}
