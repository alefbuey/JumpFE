import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressEmployeePage } from './progress-employee';

@NgModule({
  declarations: [
    ProgressEmployeePage,
  ],
  imports: [
    IonicPageModule.forChild(ProgressEmployeePage),
  ],
})
export class ProgressEmployeePageModule {}
