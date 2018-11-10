import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Job } from '../../models/job';
import { Jobs } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentJobs: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public jobs: Jobs) { }

  /**
   * Perform a service for the proper jobs.
   */
  getJobs(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentJobs = [];
      return;
    }
    this.currentJobs = this.jobs.getFeed({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this job.
   */
  openJob(job: Job) {
    this.navCtrl.push('JobDetailPage', {
      job: job
    });
  }

}
