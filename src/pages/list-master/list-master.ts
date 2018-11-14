import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { JobFeed } from '../../models/job-feed';
import { Jobs } from '../../providers';
import { JobCreatePage } from '..';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentJobs : Jobs;
 

  constructor(public navCtrl: NavController, public jobs: Jobs, public modalCtrl: ModalController){
    //this.currentJobs = this.jobs.query()
    this.jobs.getFeed().subscribe(res => this.currentJobs = res);
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
  createJob() {
    let addModal = this.modalCtrl.create(JobCreatePage);
    addModal.onDidDismiss(job => {
      if (job) {
        this.jobs.create(job);
      }
    })
    addModal.present();
  }

  /**
   * Delete an job from the list of jobs.
   */

  /**
   * Navigate to the detail page for this job.
   */
  openJob(jobFeed: JobFeed) {
    this.navCtrl.setRoot('JobDetailPage', {
      idjob: jobFeed.idjob,
      jobMode: jobFeed.jobmode,
      imageEmployer: jobFeed.imageEmployer,
      nameEmploye: jobFeed.nameEmployer
    });
  }



  openProfile(){
    this.navCtrl.push('ProfilePage');
  }



  showImage(job){
    //return 'blob:http://localhost/home/ferz/Proyectos/JumpBE/' + job.imageEmployer
    return '../../assets/' + job.imageEmployer
  }

  goToProfile(idEmployer: any){
    this.navCtrl.push('ProfilePage')

  }

  goToOtherProfile(){
    this.navCtrl.push('ProfilePage')


  }

  

}
