import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobCreatePage } from './job-create';

@NgModule({
  declarations: [
    JobCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(JobCreatePage),
  ],
})
export class JobCreatePageModule {}
