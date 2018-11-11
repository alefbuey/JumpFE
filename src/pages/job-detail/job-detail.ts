import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers'
import { JobDetail } from '../../models/job-detail';
import { Jobs } from '../../providers'

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html'
})

export class JobDetailPage {
  jobDetail: any;

  //jobProv: JobDetailProv
 
  constructor(public navCtrl: NavController, public api: Api, public job: Jobs , navParams: NavParams) {
    var idJob = navParams.get('idJob');
    var jobMode = navParams.get('jobMode');
    this.job.select(idJob, jobMode).subscribe(res => this.jobDetail= (res as any) as JobDetail);
  }

}
