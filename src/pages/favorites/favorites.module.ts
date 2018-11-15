import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FavoritesPage } from './favorites';
import { MomentModule } from 'angular2-moment';


@NgModule({
  declarations: [
    FavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritesPage),
    TranslateModule.forChild(),
    MomentModule
  ],
})
export class FavoritesPageModule {}
