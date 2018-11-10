import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { JobCreatePage } from './job-create';

@NgModule({
  declarations: [
    JobCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(JobCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    JobCreatePage
  ]
})
export class JobCreatePageModule { }
