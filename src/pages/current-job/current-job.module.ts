import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentJobPage } from './current-job';

@NgModule({
  declarations: [
    CurrentJobPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentJobPage),
  ],
})
export class CurrentJobPageModule {}
