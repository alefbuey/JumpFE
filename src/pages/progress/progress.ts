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
    var data = {
      idemployee :  employeeStatus.idemployee,
      idjob : employeeStatus.idjob
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
          name: 'comment',
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
          handler: () => {
            this.showRate(employeeStatus);
          }
        }
      ]
    });
    prompt.present();
  }

  showRate(employeeStatus: MemberTeam){
    const alert = this.alertCtrl.create({
      title: 'Rate your experience',
      cssClass: 'alertstar',
      enableBackdropDismiss:false,
      buttons: [
           { handler: data => { this.resolveRate(1);}},
           { handler: data => { this.resolveRate(2);}},
           { text: '3', handler: data => { this.resolveRate(3);}},
           { handler: data => { this.resolveRate(4);}},
           { handler: data => { this.resolveRate(5);}}
      ]
    });
    alert.present();
  }

  resolveRate(numero: number){
    console.log(numero)
  }

}

