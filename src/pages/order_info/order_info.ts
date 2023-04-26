import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { Deliveryman_infoPage } from '../deliveryman_info/deliveryman_info';
import { Ordered_itemsPage } from '../ordered_items/ordered_items';
@Component({
  selector: 'page-order_info',
  templateUrl: 'order_info.html'
})
export class Order_infoPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
	
  deliveryman_info(){
        this.navCtrl.push(Deliveryman_infoPage)
  }
 
  ordered_items() {
    let modal = this.modalCtrl.create(Ordered_itemsPage);
    modal.present();
  }

}
