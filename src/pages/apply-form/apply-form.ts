
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { User, Jobs } from '../../providers'
import { MainPage } from '../'

/**
 * Generated class for the ApplyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-form',
  templateUrl: 'apply-form.html',
})
export class ApplyFormPage {

  jobTitle: "";

  jobApply:{idemployee: number, idjob: number, salary: number, counteroffer: number, postedreason: string, counterofferreason: string} =
  {
    idemployee: 0, 
    idjob: 0, 
    salary: 0, 
    counteroffer: 11000, 
    postedreason: "I am the best", 
    counterofferreason: "Need more money"}

    private applyJobErrorString: string;
    private applyJobSuccessString: string;


  constructor(
    public user: User, //necesito el id del usuario que aplica
    public job: Jobs, //las funciones de rest estan en la carpeta providers
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

      this.jobTitle = navParams.get('jobTitle');      
      this.jobApply.idjob = navParams.get('idjob');
      this.jobApply.salary = navParams.get('salary');

      this.translateService.get('APPLY_JOB_ERROR').subscribe((value) => {
        this.applyJobErrorString = value;
      })
  
      this.translateService.get('APPLY_JOB_SUCCESS').subscribe((value) => {
        this.applyJobSuccessString = value;
      })

      this.jobApply.idemployee = user._user
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyFormPage');
  }

  applyJob() {
    // Attempt to login in through our User service
    this.job.apply(this.jobApply).subscribe((resp) => {
      let toast = this.toastCtrl.create({
        message: this.applyJobSuccessString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.navCtrl.setRoot(MainPage);
    }, (err) => {

      //this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.applyJobErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }

}
