import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  videoRoot = 'VideoPage';
  newsRoot = 'NewsPage';
  musicRoot = 'MusicPage';
  profileRoot = 'ProfilePage';

  constructor() {

  }
}
