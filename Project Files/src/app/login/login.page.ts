import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    private router: Router, 
    public afAuth: AngularFireAuth
    ) { }

  ngOnInit() {
  }
  
  async login(){
    
    const{username,password} = this;
    try{

      const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com',password);
      if(res){
        this.router.navigate(['/tabs'])
      }
    }catch(err){
      console.dir(err);
      if(err.code == "auth/user-not-found"){
        console.log('usr not found');
      }
    }   
  }
}
