import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {

  constructor(public navCtrl: NavController) {

  }
	
 home(){
        this.navCtrl.setRoot(HomePage)
  } 


}
