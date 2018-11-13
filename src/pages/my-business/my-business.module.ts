import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBusinessPage } from './my-business';

@NgModule({
  declarations: [
    MyBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBusinessPage),
  ],
})
export class MyBusinessPageModule {}
