import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  server: string = "http://localhost/server_api/";

  constructor(public http: Http) { }

  postData(body, file){
    let type= "application/json; charset=UTF-8"
    let headers = new Headers ({'Content-Type': type})
    let options = new RequestOptions ({headers: headers})

    return this.http.post(this.server + file, JSON.stringify(body), options).map(res => res.json())
}
}
