import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post.provider';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {
  estates: any = [];
  userUID: string = this.afauth.auth.currentUser.uid;

  constructor(
    public router: Router,
    private afauth: AngularFireAuth,
    private postsv: PostProvider
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.estates = [];
    this.loadEstates();
   }

  loadEstates(){
  
    return new Promise(resolve => {
      let body = {
         aksi: 'getdata',
         userId: this.userUID,
      }
      this.postsv.postData(body,'postApi.php').subscribe(data => {
        for(let estate of data.result){
          this.estates.push(estate);
        }
        resolve(true);
      });
    });
  }

  deletepro(id){

    return new Promise(resolve => {
      let body = {
         aksi: 'delete',
         id: id
      }
      this.postsv.postData(body,'postApi.php').subscribe(data => {
        this.ionViewWillEnter();
      });
    });
  }

}
