import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Sign_inPage } from '../sign_in/sign_in';
import { VerificationPage } from '../verification/verification';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }
	
 sign_in(){
        this.navCtrl.setRoot(Sign_inPage)
  }
 verification(){
        this.navCtrl.push(VerificationPage)
  } 


}
