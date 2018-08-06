import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Changephone } from "../changephone/changephone";
import { Changepwd } from "../changepwd/changepwd";

@Component({
  selector: 'page-setlist',
  templateUrl: 'setlist.html'
})

export class Setlist {

  constructor(
    private camera: Camera,
    private nav: NavController,
  ) {
  }

  path:string = 'assets/imgs/logo.png'

  toChangePhone() {
    this.nav.push(Changephone)
  }
  toChangePwd() {
    this.nav.push(Changepwd)
  }
  getPic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log(imageData);
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.path = base64Image;
    }, (err) => {
      // Handle error
    });
  }
}
