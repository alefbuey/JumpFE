import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyingBusinessPage, AcceptedBusinessPage } from '..';
import { TranslateService } from '@ngx-translate/core';


/**
 * Generated class for the MyBusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-business',
  templateUrl: 'my-business.html',
})
export class MyBusinessPage {
  tab1Root: any = ApplyingBusinessPage;
  tab2Root: any = AcceptedBusinessPage;

  tab1Title = " ";
  tab2Title = " ";
  constructor(public navCtrl: NavController, public navParams: NavParams,public translateService: TranslateService) {
        translateService.get(['POSTED', 'IN_COURSE']).subscribe(values => {
      this.tab1Title = values['POSTED'];
      this.tab2Title = values['IN_COURSE'];

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBusinessPage');
  }

}
