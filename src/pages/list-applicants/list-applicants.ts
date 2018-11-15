import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { User } from '../../providers'
import { Applicant } from '../../models/applicant'
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the ListApplicantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-applicants',
  templateUrl: 'list-applicants.html',
})
export class ListApplicantsPage {

  private applicantErrorString: string;
  private applicantSuccessString: string;
  private applicantSuccessDeletedString: string;

  applicants : Applicant[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public user: User, 
    private alertCtrl: AlertController,     
    public toastCtrl: ToastController,
    public translateService: TranslateService
    ) {

    var idJob = navParams.get('idJob')

    this.user.listApplicants(idJob).subscribe(res => this.applicants = res)

    this.translateService.get('ERROR_APPLICANT').subscribe((value) => {
      this.applicantErrorString = value;
    })

    this.translateService.get('ADD_APPLICANT').subscribe((value) => {
      this.applicantSuccessString = value;
    })

    this.translateService.get('REJECT_APPLICANT').subscribe((value) => {
      this.applicantSuccessDeletedString = value;
    })

    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListApplicantsPage');
  }

  acceptApplicant(applicant) {
    // Attempt to login in through our User service
    var data = {
      idemployee :  applicant.idemployee,
      idjob : applicant.idjob
    }

    let alert = this.alertCtrl.create({
      title: 'Adding Confirmation',
      message: 'Are you sure to add this applicant?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'YES',
          handler: () => {
            this.user.acceptApplicant(data).subscribe((resp) => {
              this.removeApplicantOfList(applicant)
              let toast = this.toastCtrl.create({
                message: this.applicantSuccessString,
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            }, (err) => {
        
              //this.navCtrl.push(MainPage);
        
              // Unable to sign up
              let toast = this.toastCtrl.create({
                message: this.applicantErrorString,
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            });
          }
        }
      ]
    });
    alert.present();
  }

  removeApplicantOfList(applicant){
 
    for(var i = 0; i < this.applicants.length; i++) {
 
      if(this.applicants[i] == applicant){
        this.applicants.splice(i, 1);
      }
 
    }
 
  }

  rejectApplicant(applicant){
    // Attempt to login in through our User service
    var data = {
      idemployee :  applicant.idemployee,
      idjob : applicant.idjob
    }

    let alert = this.alertCtrl.create({
      title: 'Deletion Confirmation',
      message: 'Are you sure to reject this applicant?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'YES',
          handler: () => {
            this.user.rejectApplicant(data).subscribe((resp) => {
              this.removeApplicantOfList(applicant)
              let toast = this.toastCtrl.create({
                message: this.applicantSuccessDeletedString,
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            }, (err) => {
        
              //this.navCtrl.push(MainPage);
        
              // Unable to sign up
              let toast = this.toastCtrl.create({
                message: this.applicantErrorString,
                duration: 3000,
                position: 'bottom'
              });
              toast.present();
            });
          }
        }
      ]
    });
    alert.present();
  }

}
