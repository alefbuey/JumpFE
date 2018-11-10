import { Injectable } from '@angular/core';
import { Job } from '../../models/job';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user'

@Injectable()
export class Jobs {
//  jobs : Observable<Job>;
  jobs: Job[] = [];
  defaultJob: Job = {
    idemployer: 0,
    idjob: 0,
    jobmode: 0,
    imageEmployer: "uploads/profiles/default.png",
    nameEmploye: "Default name",
    title: "Default title",
    jobcost: 0,
    dateposted: "9999-99-99",
    numbervacancies: 0
};

  constructor( public api: Api, public user: User) {}
  

  getFeed(params?: any) : Observable<Jobs> {
    return this.api.get('feed/true/'+ this.user._user).map(res => (res as any) as Jobs);
  }

  add(job: Job) {
  }

  delete(job: Job) {
  }

}
