import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Job } from '../../models/job';
import { Jobs } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentJobs : Jobs;

  safeUrl:  SafeResourceUrl;

  private urlValue: string;
  
  get url(): string {
    return this.urlValue
  };
  set url(value: string) {
    this.urlValue = value;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }



  constructor(public navCtrl: NavController, public jobs: Jobs, public modalCtrl: ModalController, private sanitizer: DomSanitizer){
    //this.currentJobs = this.jobs.query()
    this.jobs.query().subscribe(res => this.currentJobs = res);
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
  addJob() {
    let addModal = this.modalCtrl.create('JobCreatePage');
    addModal.onDidDismiss(job => {
      if (job) {
        this.jobs.add(job);
      }
    })
    addModal.present();
  }

  /**
   * Delete an job from the list of jobs.
   */
  deleteJob(job) {
    this.jobs.delete(job);
  }

  /**
   * Navigate to the detail page for this job.
   */
  openJob(job: Job) {
    this.navCtrl.push('JobDetailPage', {
      job: job
    });
  }

  showImage(job: Job){
    //return 'blob:http://localhost/home/ferz/Proyectos/JumpBE/' + job.imageEmployer
    return '../../assets/' + job.imageEmployer
  }
}
