import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-applying-jobs',
  templateUrl: 'applying-jobs.html',
})
export class ApplyingJobsPage {

  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){
  
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyingJobsPage');
  }

  
}
