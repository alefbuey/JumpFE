import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers'
import { Applicant } from '../../models/applicant'

/**
 * Generated class for the ListApplicantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-applicants',
  templateUrl: 'list-applicants.html',
})
export class ListApplicantsPage {

  applicants : Applicant[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public user: User) {

    var idJob = navParams.get('idJob')

    this.user.listApplicants(idJob).subscribe(res => this.applicants = res)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListApplicantsPage');
  }

}
