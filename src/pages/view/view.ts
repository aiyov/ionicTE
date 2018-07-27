import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class View {

  constructor(
    public navCtrl: NavController,
    public router: Router
  ) {

  }
  ngOnInit() {
  }
}
