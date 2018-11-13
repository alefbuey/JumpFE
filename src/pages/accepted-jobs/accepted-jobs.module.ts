import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptedJobsPage } from './accepted-jobs';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AcceptedJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptedJobsPage),
    TranslateModule.forChild()
  ],
})
export class AcceptedJobsPageModule {}
