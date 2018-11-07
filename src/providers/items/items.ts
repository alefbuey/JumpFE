import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Items {
//  items : Observable<Item>;
  items: Item[] = [];
  defaultItem: Item = {
    id: 2,
    idemployer: 2,
    mode: 2,
    state: 1,
    idlocation: 2,
    title: "Database design",
    description: "No description yet",
    jobcost: 100.00,
    jobcostcovered: 50.00,
    dateposted: "2018-03-24T05:00:00.000Z",
    datestart: "2018-05-30T05:00:00.000Z",
    dateend: "2018-06-30T05:00:00.000Z",
    datepostend: "2018-05-15T05:00:00.000Z",
    numbervacancies: 3,
    createdAt: "2018-11-05T23:21:52.655Z",
    updatedAt: "2018-11-05T23:21:52.655Z"
};

  constructor( public api: Api) {
//    this.items = this.api.get('/feed/true/1').map((response: Response) => response.json() as Item);
    // let items =  JSON.parse(this.ab2str(this.api.get('/feed/true/1')));
    // console.log(items);
    
  }
  

  query(params?: any) : Observable<Items> {
    return this.api.get('feed/true/1').map(res => (res as unknown) as Items);
    // subscribe();
  
  //return this.api.get('/feed/true/1').subscribe((response: Response) => response.json() as Item)
}

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
