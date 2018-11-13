import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api, Jobs} from '../../providers'
import { JobDetail } from '../../models/job-detail';
import { ApplyFormPage } from '..';

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html'
})

export class JobDetailPage {
  jobDetail: any;
  employer = {
    imageEmployer: "",
    nameEmploye: ""
  }

  idjob : 0;
  //jobProv: JobDetailProv
 
  constructor(public navCtrl: NavController, public api: Api, public job: Jobs , navParams: NavParams) {
    this.idjob = navParams.get('idjob');
    var jobMode = navParams.get('jobMode');
    var imageEmployer = navParams.get('imageEmployer');
    var nameEmploye = navParams.get('nameEmploye');

    this.employer.imageEmployer = imageEmployer;
    this.employer.nameEmploye = nameEmploye;
    
    this.job.select(this.idjob, jobMode).subscribe(res => this.jobDetail= (res as any) as JobDetail);
    
  }

  openApplyForm(){
    this.navCtrl.push(ApplyFormPage, {idjob: this.idjob, jobTitle: this.jobDetail.title, salary: this.jobDetail.jobcost})
  }

}
