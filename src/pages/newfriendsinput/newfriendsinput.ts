import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import {Chat} from "../chat/chat";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-input',
  templateUrl: 'newfriendsinput.html'
})
export class NewfriendsInput {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
  ) {

  }
  toChat() {
    this.navCtrl.setRoot(TabsPage)
    this.appCtrl.getRootNav().push(Chat)
    // this.router.navigate(['chat']);
  }
}
