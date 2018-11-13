import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplyingBusinessPage } from './applying-business';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ApplyingBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyingBusinessPage),
    TranslateModule.forChild()
  ],
})
export class ApplyingBusinessPageModule {}
