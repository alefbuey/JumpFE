import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Jobs } from '../../providers';



@IonicPage()
@Component({
  selector: 'page-applying-business',
  templateUrl: 'applying-business.html',
})
export class ApplyingBusinessPage {
  applyingBusiness: Jobs;

  constructor(public navCtrl: NavController,public jobs: Jobs,  public navParams: NavParams, public modalCtrl: ModalController) {
    this.jobs.applyingBusiness().subscribe(res => this.applyingBusiness = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyingBusinessPage');
  }

  // openAcceptedJob(job: JobFeed) {
  //   this.navCtrl.setRoot('JobDetailPage', {
  //     idJob: job.idjob,
  //     jobMode: job.jobmode
  //   });
  // }
}
