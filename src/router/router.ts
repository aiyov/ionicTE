import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from '../pages/tabs/tabs';
import {Login} from '../pages/login/login';
import {Register} from '../pages/register/register';
import { Chat } from '../pages/chat/chat';

const appRoutes: Routes = [
  {
    path: 'tabsPage',
    component: TabsPage
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'chat',
    component: Chat
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Login
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
