import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { MusicPop } from './popover';

/**
 * Generated class for the MusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private popCtrl: PopoverController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicPage');
  }
  pop(event) {
    this.popCtrl.create(MusicPop).present({ ev: event });
  }
}
