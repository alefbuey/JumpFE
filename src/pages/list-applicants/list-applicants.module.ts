import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ListApplicantsPage } from './list-applicants';

@NgModule({
  declarations: [
    ListApplicantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListApplicantsPage),
    TranslateModule.forChild()
  ],
})
export class ListApplicantsPageModule {}
