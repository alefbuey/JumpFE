import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MemberTeam } from '../../models/applicant'
import { User } from '../../providers'
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the ListTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-team',
  templateUrl: 'list-team.html',
})
export class ListTeamPage {

  team : MemberTeam[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: User
    ) {

    var idJob = navParams.get('idJob')

    this.user.listTeamMember(idJob).subscribe(res => this.team = res)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTeamPage');
  }

  goToProfile(idEmployer: any){
    this.navCtrl.push('GeneralProfilePage',{iduser: idEmployer})

  }

  goToProgress(user: MemberTeam){
    this.navCtrl.push('ProgressPage',{idemployee: user.idemployee, idjob: user.idjob})

  }

  goToChat(user: MemberTeam){
    this.navCtrl.push('ChatPage');
  }
}
