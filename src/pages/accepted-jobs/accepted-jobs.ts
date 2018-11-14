import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jobs, User } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-accepted-jobs',
  templateUrl: 'accepted-jobs.html',
})
export class AcceptedJobsPage {
  acceptedJobs: Jobs;
  employer: User;

  constructor(public navCtrl: NavController,public jobs: Jobs, public user: User, public navParams: NavParams) {
    this.jobs.acceptedJobs().subscribe(res => this.acceptedJobs = res);
    
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
