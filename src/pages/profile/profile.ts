import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile} from '../../models/profile';
import { Api , User } from '../../providers'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api, public user: User) {
    var idUser = user._user
    this.user.selectProfile(idUser).subscribe(res => this.profile= (res as any) as Profile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
