import {Component} from '@angular/core';
// import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(
    private camera: Camera,
    private imagePicker: ImagePicker
  ) {
  }

  path:string = 'assets/imgs/logo.png'

  getPic() {
    const options: CameraOptions = {
      /*quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE*/
    }

    /*this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      console.log(imageData);
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.path = base64Image;
    }, (err) => {
      // Handle error
    });*/

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        let base64Image = 'data:image/jpeg;base64,' + results[i];
        this.path = results[i];
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
}
