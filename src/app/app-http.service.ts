import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

interface Options {
    limit?:number;
}

@Injectable()
export class AppHttpService {
  private url: string;
  private header: Headers;

  constructor (private http: Http) {
   this.setAccessToken();
  }

  setAccessToken () {
    let token = '';
    this.header = new Headers({'Authorization': 'Bearer ' + token});
  }

  builder (resource: string) {
    this.url = 'https://hinode.com.br/api/product/000415?site=hinode';
    return this;
  }

  list (options: Options = {}) {
    let url = this.url;

    //if (options.limit === undefined) {
    //  options.limit = 30;
    //}

   // url += '?limit=' + options.limit;

    return this.http.get(url, {headers: this.header})
      .toPromise()
      .then(response => response.json());
  }

  view (id: number | string) {
    return this.http.get('https://hinode.com.br/api/product/000415?site=hinode')
      .toPromise()
      .then(response => response.json());
  }

  update (id: number, data: Object) {
    return this.http.put(this.url + '/' + id, data, {headers: this.header})
      .toPromise()
      .then(response => response.json());

  }

  insert ( product: Object) {
    return this.http.post(this.url, product, {headers: this.header})
      .toPromise()
      .then(response => response.json());
  }

  delete (id: number) {
    return this.http.delete(this.url + '/' + id, {headers: this.header})
      .toPromise()
      .then(response => response.json());
  }
}
