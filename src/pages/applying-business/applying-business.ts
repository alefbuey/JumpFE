import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { Jobs } from '../../providers';
import { ListApplicantsPage } from '../'



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

  openPostedJob(job){
    this.navCtrl.push(ListApplicantsPage, {idJob: job.idjob})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyingBusinessPage');
  }

}
