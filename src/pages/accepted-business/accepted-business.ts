import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jobs } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-accepted-business',
  templateUrl: 'accepted-business.html',
})
export class AcceptedBusinessPage {
  acceptedBusiness: Jobs;

  constructor(public navCtrl: NavController,public jobs: Jobs,  public navParams: NavParams) {
    this.jobs.acceptedBusiness().subscribe(res => this.acceptedBusiness = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptedJobsPage');
  }

  // openAcceptedJob(job: JobFeed) {
  //   this.navCtrl.setRoot('JobDetailPage', {
  //     idJob: job.idjob,
  //     jobMode: job.jobmode
  //   });
  // }
}
