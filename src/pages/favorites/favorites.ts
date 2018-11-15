import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { JobFeed } from '../../models/job-feed'
import { Jobs, User } from '../../providers'

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  currentJobs : JobFeed[];
 

  constructor(public navCtrl: NavController, public jobs: Jobs, public user: User, public modalCtrl: ModalController){
    //this.currentJobs = this.jobs.query()
    this.jobs.getFavJobs().subscribe(res => this.currentJobs = res as any as JobFeed[]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  openJob(jobFeed: JobFeed) {
    this.navCtrl.push('JobDetailPage', {
      idjob: jobFeed.idjob,
      jobMode: jobFeed.jobmode,
      imageEmployer: jobFeed.imageEmployer,
      nameEmploye: jobFeed.nameEmployer
    });
  }

  goToProfile(idEmployer: any){
    this.navCtrl.push('ProfilePage',{idEmployer: idEmployer})

  }

}
