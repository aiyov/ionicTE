import {Component} from '@angular/core';
import {Keyboard} from '@ionic-native/keyboard';
import {Router, ActivatedRoute} from '@angular/router';
import {NavController} from 'ionic-angular';
import {Platform} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {BackButtonService} from "../../services/backButton.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(
    private platform: Platform,
    private keyboard: Keyboard,
    private nav: NavController,
    // private router: Router,
    private backButtonService: BackButtonService
  ) {
    this.platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(null);
    });
  }

  ngOnInit() {
    this.keyboard.onKeyboardShow().subscribe(data => {
      //your code goes here
    });
  }

  keyboardShowHandler(e) {
    //e.keyboardHeight 这个可以直接获取软键盘的高度
    alert('Keyboard height is: ' + 123);
  }

  login() {
    // this.router.navigate(['/tabsPage']);
    this.nav.push(TabsPage)
  }

}
