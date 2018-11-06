import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';


@Injectable()
export class Items {

  defaultItem: any = {
    "title": "No info",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(public api: Api) {
    
  }

  query(params?: any){
//    return this.api.get('/items', params);
 
    return this.api.get('/feed/true/1');
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
