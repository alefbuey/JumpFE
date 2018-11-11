import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryJobPage } from './history-job';

@NgModule({
  declarations: [
    HistoryJobPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoryJobPage),
  ],
})
export class HistoryJobPageModule {}
