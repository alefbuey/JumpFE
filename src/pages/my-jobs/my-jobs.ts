import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs, NavController, NavParams } from 'ionic-angular';
import { ApplyingJobsPage, AcceptedJobsPage } from '../';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-my-jobs',
  templateUrl: 'my-jobs.html',
})
export class MyJobsPage {

  // @ViewChild('myTab') tabRef: Tabs;

  tab1Root: any = ApplyingJobsPage;
  tab2Root: any = AcceptedJobsPage;

  tab1Title = " ";
  tab2Title = " ";
  constructor(public navCtrl: NavController, public navParams: NavParams,public translateService: TranslateService) {
        translateService.get(['APPLYING', 'ACCEPTED']).subscribe(values => {
      this.tab1Title = values['APPLYING'];
      this.tab2Title = values['ACCEPTED'];

      

    });
  }

  ionViewDidLoad() {
    // this.tabRef.select(0);

    console.log('ionViewDidLoad MyJobsPage');
  }

}
