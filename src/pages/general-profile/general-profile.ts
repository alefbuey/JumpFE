import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile} from '../../models/profile';
import { Api , User } from '../../providers'

/**
 * Generated class for the GeneralProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-profile',
  templateUrl: 'general-profile.html',
})
export class GeneralProfilePage {
  profile : any;
  iduser : number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api: Api, public user: User) {
    var iduser = navParams.get('iduser');
    this.user.selectProfile(iduser).subscribe(res => this.profile= (res as any) as Profile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralProfilePage');
  }

}
