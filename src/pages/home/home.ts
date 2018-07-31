import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Router} from '@angular/router';
import {Chat} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    // public router: Router
  ) {

  }
  toChat() {
    this.navCtrl.push(Chat)
    // this.router.navigate(['chat']);
  }
}
