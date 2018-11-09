import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html'
})




export class JobDetailPage {
  jobDetail: any;

  defaultJobDetail ={
    id: 0,
    idemployer: 0,
    mode: 0,
    state: 0,
    idlocation: 0,
    title: "Default title",
    description: "Default description",
    jobcost: 0,
    jobcostcovered: 0,
    dateposted: "No date",
    datestart: "No date",
    dateend: "No date",
    datepostend: "No date",
    numbervacancies: 0,
    createdAt: "No date",
    updatedAt: "No date"
  }

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.jobDetail = navParams.get('jobDetail') || this.defaultJobDetail;
  }
}
