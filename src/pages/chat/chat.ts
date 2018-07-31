import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {Router} from '@angular/router';

/*interface  chatInfo {
  id: number;
  avatar: string;
  words: string;
}*/

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class Chat {

  constructor(
    public navCtrl: NavController,
    // public router: Router
  ) {

  }

  /*chatList:chatInfo[] = [
    {
      id: 123,
      avatar: 'assets/imgs/logo.png',
      words: '你是猪吗，你才是猪啊某上市公司董事长和某地产公司董事'
    },
    {
      id: 456,
      avatar: 'assets/imgs/logo.png',
      words: '故事是这样的：某上市公司董事长和某地产公司董事，还都参加了高尔夫球队，两人平时经常相约打球、聚会吃饭……'
    },
    {
      id: 123,
      avatar: 'assets/imgs/logo.png',
      words: '你是猪吗，你才是猪啊.'
    }
  ]*/
}
