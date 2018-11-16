import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberTeam } from '../../models/applicant'
import { User } from '../../providers'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  employeeStatus: MemberTeam;
  public assigments = [1, 2, 3, 4, 5];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: User,
    private alertCtrl: AlertController
    ) {
      var idJob = navParams.get('idjob')
      var idEmployee = navParams.get('idemployee')

      this.user.employeeJobStatus(idJob,idEmployee).subscribe(res => this.employeeStatus = res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressPage');
  }

  doPayment(employeeStatus:MemberTeam){
    var payload = {
      idjob: employeeStatus.idjob,
      idemployee :  employeeStatus.idemployee,
      salary : employeeStatus.salary,
      state : 3
    }
    const prompt = this.alertCtrl.create({
      title: 'Are you sure to do the payment?',
      message: "Amount: $" + employeeStatus.salary.toString(),
      cssClass: 'generalalert',
      buttons: [
        {
          text: 'No',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.user.savePayment(payload);
            this.showComment(employeeStatus);
          }
        }
      ]
    });
    prompt.present();
  }

  showComment(employeeStatus:MemberTeam){


    const prompt = this.alertCtrl.create({
      title: 'How was your experience?',
      message: "Help us with a comment.",
      cssClass: 'generalalert',
      inputs: [
        {
          name: 'commentToEmployee',
          placeholder: 'Comment '
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            var payload = {
              idjob : employeeStatus.idjob,
              idemployee: employeeStatus.idemployee,
              comment: data.commentToEmployee,
              toWho: 'employee'
            }

            this.user.saveComment(payload);
            this.showRate(employeeStatus);
          }
        }
      ]
    });
    prompt.present();
  }

  showRate(employeeStatus: MemberTeam){
    var payload = {
      idemployee : employeeStatus.idemployee,
      idjob : employeeStatus.idjob,
      rankEmployee : employeeStatus.employeeRank
    }
    const alert = this.alertCtrl.create({
      title: 'Rate your experience',
      cssClass: 'alertstar',
      enableBackdropDismiss:false,
      buttons: [
           { handler: () => { payload.rankEmployee = 1; this.user.saveRank(payload);}},
           { handler: () => { payload.rankEmployee = 2; this.user.saveRank(payload);}},
           { text: '3', handler: () => { payload.rankEmployee = 3; this.user.saveRank(payload);}},
           { handler: () => { payload.rankEmployee = 4; this.user.saveRank(payload);}},
           { handler: () => { payload.rankEmployee = 5; this.user.saveRank(payload);}}
      ]
    });
    alert.present();
  }


}

