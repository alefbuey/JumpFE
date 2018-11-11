import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Jobs, User } from '../../providers'
import { MainPage } from '../'

@IonicPage()
@Component({
  selector: 'page-job-create',
  templateUrl: 'job-create.html',
})
export class JobCreatePage {
  jobInfo: { idemployer: number, mode: number, title: string, description: string, jobcost:	number, jobcostcovered:	number, datestart: string, dateend:	string, datepostend: string, numbervacancies:	2} =   
  {
    idemployer    :	0,	
    mode          :	1,		
    title         :	"Job desde Postam",	
    description   :	"Prueba desde Postman",	
    jobcost       :	10000,	
    jobcostcovered:	5000,
    datestart     :	"2018-12-12",	
    dateend       :	"2018-12-12",	
    datepostend   :   "2018-12-12",	
    numbervacancies :	2 
  };


  private createJobErrorString: string;
  private createJobSuccessString: string;

  constructor(
    public user: User,
    public navCtrl: NavController,
    public job: Jobs,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('CREATE_JOB_ERROR').subscribe((value) => {
      this.createJobErrorString = value;
    })

    this.translateService.get('CREATE_JOB_SUCCESS').subscribe((value) => {
      this.createJobSuccessString = value;
    })

    this.jobInfo.idemployer = user._user
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobCreatePage');
  }

  createJob() {
    // Attempt to login in through our User service
    this.job.create(this.jobInfo).subscribe((resp) => {
      let toast = this.toastCtrl.create({
        message: this.createJobSuccessString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.navCtrl.push(MainPage);
    }, (err) => {

      //this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.createJobErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }
}

