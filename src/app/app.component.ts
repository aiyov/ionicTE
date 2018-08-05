import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
// import {Keyboard} from '@ionic-native/keyboard';

// import {Login} from '../pages/login/login';
// import {View} from '../pages/view/view';
import {Changepwd} from "../pages/changepwd/changepwd";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Changepwd;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      }
    );
  }
  ngOnInit() {
  }
}
