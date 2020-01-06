import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstateService } from '../../services/estate.service';
import { Estate } from '../estate.model';
import { PostProvider } from 'src/providers/post.provider';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  loadedRecipe: Estate;
  estates: any[];
  id: string;
  estate: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private estateService: EstateService,
    private postsv: PostProvider) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('id')){
        return;
      }
      this.id =paraMap.get('id');
      // this.loadedRecipe = this.estateService.getRecipe(id);
    }) 
  }

  ionViewWillEnter() {
    this.estates = [];
    this.loadSingle(this.id);
   }

  loadSingle(id: string){
    return new Promise(resolve => {
      let body = {
         aksi: 'single',
         id: this.id
      }
      this.postsv.postData(body,'postApi.php').subscribe(data => {
       
        for(let estate of data.result){
          this.estates.push(estate);
        }
        resolve(true);
      });
    });
  }

}
