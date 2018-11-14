import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBusinessPage } from './my-business';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MyBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBusinessPage),
    TranslateModule.forChild() 
  ],
  exports: [
    MyBusinessPage
  ]
})
export class MyBusinessPageModule {}
