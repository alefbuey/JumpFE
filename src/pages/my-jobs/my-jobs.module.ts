import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyJobsPage } from './my-jobs';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MyJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyJobsPage),
    TranslateModule.forChild()

  ],
  exports: [
    MyJobsPage
  ]
})
export class MyJobsPageModule {}
