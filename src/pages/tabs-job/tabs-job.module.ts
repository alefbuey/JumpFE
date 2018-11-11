import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TabsJobPage } from './tabs-job';

@NgModule({
  declarations: [
    TabsJobPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsJobPage),
  ],
  exports: [
    TabsJobPage
  ]
})
export class TabsJobPageModule {}
