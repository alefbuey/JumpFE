import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

import { Applicant, MemberTeam } from '../../models/applicant'


/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      console.log(res.status)
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('register', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user.id;
  }


  selectProfile(idUser){
    return this.api.get('profile/'+idUser);
  }

  selectProfileImage(idUser){
    return this.api.get('getImageById/'+idUser);
  }


  listApplicants(idJob){
    return this.api.get('applicants/'+idJob).map(res => (res as any) as Applicant[])
  }

  listTeamMember(idJob){
    return this.api.get('membersTeam/'+idJob).map(res => (res as any) as MemberTeam[])
  }

  acceptApplicant(jobEmployeeInfo: any){
    let seq = this.api.post('acceptApplicant', jobEmployeeInfo).share();

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

  rejectApplicant(jobEmployeeInfo: any){
    let seq = this.api.post('deleteApplicant', jobEmployeeInfo).share();

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

  employeeJobStatus(idJob,idEmployee){
    return this.api.get('employeeJobStatus/'+idJob+'/'+idEmployee).map(res => (res as any) as MemberTeam)

  }

  savePayment(paymentInfo: any){
    let seq = this.api.post('savePayment',paymentInfo).share();
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

  saveComment(commentInfo: any){
    let seq = this.api.post('saveComment',commentInfo).share();
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

  saveRank(rankInfo: any){
    let seq = this.api.post('saveRank',rankInfo).share();
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
