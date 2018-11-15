import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTeamPage } from './list-team';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ListTeamPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTeamPage),
    TranslateModule.forChild()

  ],
})
export class ListTeamPageModule {}
