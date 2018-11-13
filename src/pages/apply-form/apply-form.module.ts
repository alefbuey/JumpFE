import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ApplyFormPage } from './apply-form';

@NgModule({
  declarations: [
    ApplyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplyFormPage),
    TranslateModule.forChild()
  ],
})
export class ApplyFormPageModule {}
