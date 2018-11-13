import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptedBusinessPage } from './accepted-business';

@NgModule({
  declarations: [
    AcceptedBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptedBusinessPage),
  ],
})
export class AcceptedBusinessPageModule {}
