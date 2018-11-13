import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ApplyingJobsPage } from './applying-jobs';

@NgModule({
  declarations: [
    ApplyingJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyingJobsPage),
    TranslateModule.forChild()
  ],
})
export class ApplyingJobsPageModule {}
