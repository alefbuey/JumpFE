import { Injectable } from '@angular/core';
import { JobFeed } from '../../models/job-feed';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user'

@Injectable()
export class Jobs {
  jobs: JobFeed[] = [];
  
  constructor( public api: Api, public user: User) {}
  

  getFeed(params?: any) : Observable<Jobs> {
    return this.api.get('feed/'+ this.user._user).map(res => (res as any) as Jobs);
  }

  acceptedJobs(params?: any) : Observable<Jobs> {
    return this.api.get('getAcceptedJobs/'+ this.user._user).map(res => (res as any) as Jobs);
  }

  applyingJobs(params?: any) : Observable<Jobs> {
    return this.api.get('getApplyingJobs/'+ this.user._user).map(res => (res as any) as Jobs);
  }

  acceptedBusiness(params?: any) : Observable<Jobs> {
    return this.api.get('getAcceptedBusiness/'+ this.user._user).map(res => (res as any) as Jobs);
  }

  applyingBusiness(params?: any) : Observable<Jobs> {
    return this.api.get('getPostedBusiness/'+ this.user._user).map(res => (res as any) as Jobs);
  }


  create(jobInfo: any) {
    let seq = this.api.post('createJob', jobInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //Do nothing
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  select(idJob, jobMode){
    return this.api.get('selectJob/'+idJob+'/'+jobMode)
  }
    
  apply(jobApply){
    let seq = this.api.post('applyingToJob', jobApply).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        //Do nothing
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}
