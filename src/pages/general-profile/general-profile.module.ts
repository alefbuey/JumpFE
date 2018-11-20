import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralProfilePage } from './general-profile';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    GeneralProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralProfilePage),
    TranslateModule.forChild(),
    ChartsModule

  ],
})
export class GeneralProfilePageModule {}
