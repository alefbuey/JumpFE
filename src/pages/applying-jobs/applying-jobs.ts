import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Jobs } from '../../providers'

@IonicPage({ priority: 'high' })
@Component({
  selector: 'page-applying-jobs',
  templateUrl: 'applying-jobs.html',
})
export class ApplyingJobsPage {

  applyingJobs : Jobs;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public jobs: Jobs,
    public modalController: ModalController){
  
      this.jobs.applyingJobs().subscribe(res => this.applyingJobs = res); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyingJobsPage');
  }

  
}
