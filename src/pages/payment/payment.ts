import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Order_placedPage } from '../order_placed/order_placed';
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController) {

  }
	
 order_placed(){
        this.navCtrl.push(Order_placedPage)
  }

}
