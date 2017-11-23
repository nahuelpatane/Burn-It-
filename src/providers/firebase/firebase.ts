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
    try{
      return this.fb.list('comidas').valueChanges();
    }catch(e){
      console.log(e.message)
    }
  }

}
