import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class Chat {

  constructor(
    public navCtrl: NavController,
    public router: Router
  ) {

  }
  toChat() {
    this.router.navigate(['chat']);
    console.log(123)
  }
}
