import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { JobDetailPage } from './job-detail';

@NgModule({
  declarations: [
    JobDetailPage
  ],
  imports: [
    IonicPageModule.forChild(JobDetailPage),
    TranslateModule.forChild(),
    MomentModule
  ],
  exports: [
    JobDetailPage
  ]
})
export class JobDetailPageModule { }
