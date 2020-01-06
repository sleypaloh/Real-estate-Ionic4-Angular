import { Component } from '@angular/core';
import { EstateService } from '../services/estate.service';
import { Estate } from './estate.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import { PostProvider } from 'src/providers/post.provider';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recipes: Estate[]
  data: any;
  useid: any;
  estates: any = [];
 
  constructor(
    private estatesService: EstateService, 
    private router: Router, 
    private afauth: AngularFireAuth, 
    private toast: ToastController,
    private alert: AlertController,
    private postsv: PostProvider
    ) {}

  ngOnInit() {
    // this.recipes = this.estatesService.getAllRecipes()
    this.afauth.authState.subscribe(async data => {
      if(data.email && data.uid){
        this.useid = data.email;
      }else{
        (await this.toast.create({
          message: `No Authenticaton found`,
          duration: 3000
        })).present();
      }
    })
  }

  ionViewWillEnter() {
    this.estates = [];
    this.loadAllEstates();
   }

  loadAllEstates(){
    return new Promise(resolve => {
      let body = {
         aksi: 'getall'
      }
      this.postsv.postData(body,'postApi.php').subscribe(data => {
        for(let estate of data.result){
          this.estates.push(estate);
        }
        resolve(true);
      });
    });
  }

  login(){
    this.router.navigate(['login']);
  }
  
  logout(){
      if(this.afauth.auth.signOut()){
        this.alertCtrl("Success", "You've been signed out!")
        // this.router.onSameUrlNavigation
        // this.router.navigated = false;
        // window.scrollTo(0, 0);
      }
  }

  async alertCtrl(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['Ok']
    })
    alert.present()
  }

}
