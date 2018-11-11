import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptedJobsPage } from './accepted-jobs';

@NgModule({
  declarations: [
    AcceptedJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptedJobsPage),
  ],
})
export class AcceptedJobsPageModule {}
