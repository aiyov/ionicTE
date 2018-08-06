import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
// import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(
    private keyboard: Keyboard,
    // private route: ActivatedRoute,
    // private router: Router
  ) {

  }
  ngOnInit() {
    this.keyboard.show();
  }
  login() {
    // this.router.navigateByUrl('tabsPage');
  }

}
