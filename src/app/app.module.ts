import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from '../router/router';
import { BrowserModule } from '@angular/platform-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { Info } from '../pages/info/info';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Chat } from '../pages/chat/chat';
import { View } from '../pages/view/view';
import {History} from "../pages/history/history";
import {Persional} from "../pages/persional/persional";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BackButtonService} from "../services/backButton.service";
@NgModule({
  declarations: [
    TabsPage,
    Login,
    MyApp,
    AboutPage,
    Info,
    HomePage,
    Register,
    Chat,
    View,
    Persional,
    History
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
    Info,
    HomePage,
    History,
    View,
    Persional
    // TabsPage,
    // Login,
    // Register
  ],
  providers: [
    Camera,
    Keyboard,
    ImagePicker,
    StatusBar,
    SplashScreen,
    BackButtonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
