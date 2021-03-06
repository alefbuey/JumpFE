import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api, Jobs} from '../../providers'
import { JobDetail } from '../../models/job-detail';
import { ApplyFormPage } from '..';
import { Map } from '../../providers/map/map' 



@IonicPage()
@Component({
  selector: 'page-job-detail',
  templateUrl: 'job-detail.html'
})

export class JobDetailPage {
  jobDetail: any;
  rank : string;
  //poner luego en la base
  jobimages: any;
  employer = {
    imageEmployer: "",
    nameEmploye: "",
 
  }

  idjob : 0;
  //jobProv: JobDetailProv

 
  constructor(public navCtrl: NavController, public api: Api, public job: Jobs , public map: Map, navParams: NavParams) {
    this.idjob = navParams.get('idjob');
    var jobMode = navParams.get('jobMode');
    var imageEmployer = navParams.get('imageEmployer');
    var nameEmploye = navParams.get('nameEmploye');
    this.rank = Math.round(Math.random()*5) +"."+Math.round(Math.random()*9);


    this.employer.imageEmployer = imageEmployer;
    this.employer.nameEmploye = nameEmploye;
    
    this.job.select(this.idjob, jobMode).subscribe(res => this.jobDetail= (res as any) as JobDetail);


    this.jobimages = [
    {
      image: 'assets/img/advance-card-bttf.png'
    },
    {
      image: 'assets/img/advance-card-jp.jpg'
    },
    {
      image: 'assets/img/advance-card-tmntr.jpg'
    },

    ];
    
  }

  openApplyForm(){
    this.navCtrl.push(ApplyFormPage, {idjob: this.idjob, jobTitle: this.jobDetail.title, salary: this.jobDetail.jobcost})
  }

  ionViewDidLoad() {
    this.map.getPosition()
  }



  loadImage(imgUrl){
    return this.api.url + "/" + imgUrl
  }
  


}



