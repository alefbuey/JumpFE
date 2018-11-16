import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberTeam } from '../../models/applicant'
import { AlertController } from 'ionic-angular';
import { User } from '../../providers'

/**
 * Generated class for the ProgressEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress-employee',
  templateUrl: 'progress-employee.html',
})
export class ProgressEmployeePage {
  employeeStatus: MemberTeam;
  public assigments = [1, 2, 3, 4, 5];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: User,
    private alertCtrl: AlertController
    ) {
      var idJob = navParams.get('idJob');
      var idEmployee = user._user;
      this.user.employeeJobStatus(idJob,idEmployee).subscribe(res => this.employeeStatus = res);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgressEmployeePage');
  }

  endJob(jobEmployee:MemberTeam){
    var data = {
      idemployee :  jobEmployee.idemployee,
      idjob : jobEmployee.idjob
    }
    const prompt = this.alertCtrl.create({
      title: 'Are you sure end this job?',
      message: "You are sending the last assigment.",
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
            this.showComment(jobEmployee);
          }
        }
      ]
    });
    prompt.present();
  }

  showComment(jobEmployee:MemberTeam){

    const prompt = this.alertCtrl.create({
      title: 'How was your experience?',
      message: "Help us with a comment.",
      cssClass: 'generalalert',
      inputs: [
        {
          name: 'commentToEmployer',
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
              idjob : jobEmployee.idjob,
              idemployee: jobEmployee.idemployee,
              comment: data.commentToEmployer,
              toWho: 'employer'
            }

            this.user.saveComment(payload);
            this.showRate(jobEmployee);
          }
        }
      ]
    });
    prompt.present();
  }

  showRate(jobEmployee: MemberTeam){
    var payload = {
      idemployee : jobEmployee.idemployee,
      idjob : jobEmployee.idjob,
      rankEmployee : jobEmployee.employeeRank
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
