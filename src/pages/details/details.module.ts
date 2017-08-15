import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Details } from './details';

@NgModule({
  declarations: [
    Details,
  ],
  imports: [
    IonicPageModule.forChild(Details),
  ],
})
export class DetailsModule {}
