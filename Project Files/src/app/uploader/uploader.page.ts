import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { PostService } from '../services/post.service';
import { PostProvider } from 'src/providers/post.provider';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
  providers: [PostProvider]
})
export class UploaderPage implements OnInit {

  image: string = "http://kygc.org/server_api/images/home.png";
  title:string = "";
  location: string = "";
  price: string = "";
  category: string = "";
  type: string = "";
  desc: string = "";
  userId: string = "";

  constructor(
    public alertCtr: AlertController, 
    public router: Router,
    private postsv: PostProvider,
    private afAuth: AngularFireAuth
    ) {}

  ngOnInit() { }

  createPost(){
    const userUID = this.afAuth.auth.currentUser.uid;
    return new Promise(resolve => {
      let body = {
         aksi: 'add',
         userId: userUID,
         image: this.image,
         title: this.title,
         location: this.location,
         price: this.price,
         category: this.category,
         type: this.type,
         desc: this.desc
      }
      this.postsv.postData(body,'postApi.php').subscribe(data => {
        this.router.navigate(['/tabs']);
        // console.log('Ok');
      })
    })
    
  }

  async alertPresent(header: string, message: string){
    const alert = await this.alertCtr.create({
      header,
      message,
      buttons: ['Ok']
    })
    alert.present()
  }

}
