import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  useid: any;
  constructor(
    private afauth: AngularFireAuth
    ) {}

  ngOnInit() {
    this.afauth.authState.subscribe(async data => {
      if(data.email && data.uid){
        this.useid = data.uid;
      }
    })
  }
}
