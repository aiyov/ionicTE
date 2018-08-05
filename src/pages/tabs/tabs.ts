import {Component} from '@angular/core';

import {History} from "../history/history";
import {HomePage} from '../home/home';
import {Info} from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = History;
  tab3Root = Info;

  constructor() {

  }

  ngOnInit() {
  }
}
