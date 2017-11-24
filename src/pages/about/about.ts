import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  init: Observable<any[]>;
  comidas: Observable<any[]>;


  constructor(public navCtrl: NavController, public db: FirebaseProvider) {
    this.init = this.db.getComida()
    this.comidas = this.init
  }

  search($event){
    let q = $event.target.value;
    console.log(q)
    this.init.subscribe(platos => {
      this.comidas = Observable.of(platos.filter(plato => (
        plato.name.toUpperCase().indexOf(q.toUpperCase()) >= 0
      )))
    })

    console.log(this.comidas)
  }
}
