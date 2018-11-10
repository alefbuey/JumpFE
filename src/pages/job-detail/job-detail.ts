import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers'
import { JobDetail } from '../../models/job-detail';

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html'
})

export class JobDetailPage {
  jobDetail: any;

  //jobProv: JobDetailProv
 
  constructor(public navCtrl: NavController, public api: Api , navParams: NavParams) {
    var idJob = navParams.get('idJob');
    var jobMode = navParams.get('jobMode');
    this.query(idJob, jobMode).subscribe(res => this.jobDetail= (res as any) as JobDetail);
    //this.jobProv.selectJob(idJob, jobMode).subscribe(res => this.jobDetail = res || this.jobProv.defaultJobDetail)  ;
  }

  query(idJob, jobMode){
    return this.api.get('selectJob/'+idJob+'/'+jobMode)
  }
}
