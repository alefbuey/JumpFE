import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptedBusinessPage } from './accepted-business';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AcceptedBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptedBusinessPage),
    TranslateModule.forChild()
  ],
})
export class AcceptedBusinessPageModule {}
