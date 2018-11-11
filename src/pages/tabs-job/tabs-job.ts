import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { CurrentJob, ApplyingJob, HistoryJob} from '../';



@IonicPage()
@Component({
  selector: 'page-tabs-job',
  templateUrl: 'tabs-job.html',
})
export class TabsJobPage {

 currentJob: any = CurrentJob;
 applyingJob: any = ApplyingJob;
 historyJob: any = HistoryJob;

}
