import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyjobsPage } from './myjobs';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MyjobsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyjobsPage),
    TranslateModule.forChild()

  ],
})
export class MyjobsPageModule {}
