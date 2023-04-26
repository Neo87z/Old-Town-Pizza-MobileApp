import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Order_infoPage } from '../order_info/order_info';
@Component({
  selector: 'page-my_orders',
  templateUrl: 'my_orders.html'
})
export class My_ordersPage {

  constructor(public navCtrl: NavController) {

  }
	
 order_info(){
        this.navCtrl.push(Order_infoPage)
  } 

}
