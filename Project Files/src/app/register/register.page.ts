import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
;import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth, 
    public alertCtrl: AlertController,
    public router: Router,
    public afstote: AngularFirestore
    ) { }

  ngOnInit() {
  }

  async register(){
    const{username,password,cpassword} = this
    if(password != cpassword){
      this.showAlert("Error!", "Passwords do not match")
      return console.error('Passwords do not match')
    }
    try{
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password)
        if(res){
          this.alertPresent('Success!', 'You are registered')
          this.router.navigate(['/login'])
        }
        this.afstote.doc(`users/${res.user.uid}`).set({
          username
        })
    }catch(err){
      this.showAlert("Fail!", err.message)
      console.dir(err)
    }
  }

  async alertPresent(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['Ok']
    })
    alert.present()
  }

  async showAlert(header: string, message: string){
       const alert = await this.alertCtrl.create({
         header,
         message,
         buttons: ["OK"]
       })
       await alert.present()
  }
  
}
