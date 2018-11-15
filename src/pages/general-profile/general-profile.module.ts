import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralProfilePage } from './general-profile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    GeneralProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralProfilePage),
    TranslateModule.forChild()

  ],
})
export class GeneralProfilePageModule {}
