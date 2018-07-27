import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from '../router/router';
import { BrowserModule } from '@angular/platform-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Chat } from '../pages/chat/chat';
import { View } from '../pages/view/view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BackButtonService} from "../services/backButton.service";
@NgModule({
  declarations: [
    TabsPage,
    Login,
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Register,
    Chat,
    View
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    View
    // TabsPage,
    // Login,
    // Register
  ],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen,
    BackButtonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}