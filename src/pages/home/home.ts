import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import {Router} from '@angular/router';
import {Chat} from "../chat/chat";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
    public router: Router
  ) {

  }
  toChat() {
    this.navCtrl.setRoot(TabsPage)
    this.appCtrl.getRootNav().push(Chat)
    // this.router.navigate(['chat']);
  }
}
