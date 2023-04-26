import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { My_ordersPage } from '../my_orders/my_orders';
@Component({
  selector: 'page-order_placed',
  templateUrl: 'order_placed.html'
})
export class Order_placedPage {

  constructor(public navCtrl: NavController) {

  }
	
 my_orders(){
        this.navCtrl.setRoot(My_ordersPage)
  }

}
