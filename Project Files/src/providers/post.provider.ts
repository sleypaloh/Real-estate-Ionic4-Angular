import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({providedIn: 'root'})
export class PostProvider {
    server: string = "https://kygc.org/server_api/";

    constructor(public http: Http){}

    postData(body, file){
        let type= "application/json; charset=utf-8";
        let headers = new Headers ({'Content-type': type});
        let options = new RequestOptions ({headers: headers});

        return this.http.post(this.server + file, JSON.stringify(body), options).map(res => res.json())
    }
}


 