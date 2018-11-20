import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { JobFeed } from '../../models/job-feed';
import { Jobs, User } from '../../providers';
import { JobCreatePage } from '..';
import { Api } from '../../providers'

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentJobs : JobFeed[];
  myBool = false;

  constructor(public navCtrl: NavController, public api: Api, public jobs: Jobs, public user: User, public modalCtrl: ModalController){
    //this.currentJobs = this.jobs.query()
    this.jobs.getFeed().subscribe(res => this.currentJobs = res as any as JobFeed[]);
  }



  /**
   * The view loaded, let's query our jobs for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new job. This shows our JobCreatePage in a
   * modal and then adds the new job to our data source if the user created one.
   */

  openCreateForm(){
    this.navCtrl.push(JobCreatePage)
  }

  /**
   * Delete an job from the list of jobs.
   */

  /**
   * Navigate to the detail page for this job.
   */
  openJob(jobFeed: JobFeed) {
    this.navCtrl.push('JobDetailPage', {
      idjob: jobFeed.idjob,
      jobMode: jobFeed.jobmode,
      imageEmployer: jobFeed.imageEmployer,
      nameEmploye: jobFeed.nameEmployer
    });
  }

  goToProfile(idEmployer: any){
    this.navCtrl.push('GeneralProfilePage',{iduser: idEmployer})

  }

  addToFavorites(job){
    var data = {
      idemployee: this.user._user,
      idjob: job.idjob
    }
    console.log(data)
    this.jobs.addFavJob(data);
    this.myBool = !this.myBool
  }

  loadImage(imgUrl){
    return this.api.url + "/" + imgUrl
  }
}
