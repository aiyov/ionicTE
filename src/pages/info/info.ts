import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from "ionic-angular";
import {Persional} from "../persional/persional";

@Component({
  selector: 'page-contact',
  templateUrl: 'info.html'
})
export class Info {

  constructor(
    public navCtrl: NavController,
    public appCtrl: App,
  ) {

  }
  toPersion() {
    this.appCtrl.getRootNav().push(Persional)
  }
}
