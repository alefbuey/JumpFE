import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobFeed } from '../../models/job-feed';
import { Jobs } from '../../providers';

/**
 * Generated class for the AcceptedJobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accepted-jobs',
  templateUrl: 'accepted-jobs.html',
})
export class AcceptedJobsPage {
  acceptedJobs: Jobs;

  constructor(public navCtrl: NavController,public jobs: Jobs,  public navParams: NavParams) {
    this.jobs.getAcceptedJobs().subscribe(res => this.acceptedJobs = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptedJobsPage');
  }

  openAcceptedJob(job: JobFeed) {
    this.navCtrl.setRoot('JobDetailPage', {
      idJob: job.idjob,
      jobMode: job.jobmode
    });
  }
}
