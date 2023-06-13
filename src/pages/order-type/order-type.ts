import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryPage } from '../delivery/delivery';
import { Delivery_infoPage } from '../delivery_info/delivery_info';

/**
 * Generated class for the OrderTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-type',
  templateUrl: 'order-type.html',
})
export class OrderTypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderTypePage');
  }


  SelectOrderTIme() {
    this.navCtrl.push(Delivery_infoPage)
  }

}
