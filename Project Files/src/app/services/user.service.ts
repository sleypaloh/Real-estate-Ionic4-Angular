import { Injectable } from '@angular/core';
import { user } from './user.model'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: any
 
  constructor( private afauth: AngularFireAuth ) { }

  userData(){
    return this.afauth.auth.currentUser.email
   
    // this.afauth.authState.subscribe(async data => {
    //   if(data.email && data.uid){
    //     return data
    //   }
    // })
  }
}
