import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sign_in',
  templateUrl: 'sign_in.html'
})
export class Sign_inPage {

  constructor(public navCtrl: NavController) {

  }
	

 register(){
        this.navCtrl.push(RegisterPage)
  }  
 home(){
        this.navCtrl.setRoot(HomePage)
  } 


}
