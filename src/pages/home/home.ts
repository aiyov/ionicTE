import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public router: Router
  ) {

  }
  toChat() {
    this.router.navigate(['chat']);
  }
}
