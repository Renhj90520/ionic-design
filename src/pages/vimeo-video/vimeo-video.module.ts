import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VimeoVideoPage } from './vimeo-video';

@NgModule({
  declarations: [
    VimeoVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(VimeoVideoPage),
  ],
})
export class VimeoVideoPageModule {}
