import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { My_profilePage } from '../my_profile/my_profile';
import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-delivery_info',
  templateUrl: 'delivery_info.html'
})
export class Delivery_infoPage {
 public event = {
     month: '',
     time1: '',
     time2: '',
   }
  constructor(public navCtrl: NavController) {

  }
	
 my_profile(){
        this.navCtrl.push(My_profilePage)
  } 
 payment(){
        this.navCtrl.push(PaymentPage)
  }

}