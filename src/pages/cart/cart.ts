import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Offers_discountsPage } from '../offers_discounts/offers_discounts';
import { Delivery_infoPage } from '../delivery_info/delivery_info';
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController) {

  }

 offers_discounts(){
        this.navCtrl.push(Offers_discountsPage)
  }
 delivery_info(){
        this.navCtrl.push(Delivery_infoPage)
  }

}
