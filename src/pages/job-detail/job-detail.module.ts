import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { JobDetailPage } from './job-detail';

@NgModule({
  declarations: [
    JobDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(JobDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    JobDetailPage
  ]
})
export class JobDetailPageModule { }
