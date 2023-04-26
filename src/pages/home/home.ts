import { Component, Inject } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { Select_locationPage } from '../select_location/select_location';
import { Item_infoPage } from '../item_info/item_info';
import { Explore_menuPage } from '../explore_menu/explore_menu';
import { AppConfig, APP_CONFIG } from '../../app/app.config';
import { BuyAppAlertPage } from '../buyappalert/buyappalert';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(@Inject(APP_CONFIG) private config: AppConfig, public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  select_location() {
    this.navCtrl.push(Select_locationPage)
  }
  item_info() {
    this.navCtrl.push(Item_infoPage)
  }
  explore_menu() {
    this.navCtrl.push(Explore_menuPage)
  }
  // buyThisApp() {
  //   window.open("https://bit.ly/cc2_Pizzamenia", '_system', 'location=no');
  // }

  buyThisApp() {
      let profileModal = this.modalCtrl.create(BuyAppAlertPage);
      profileModal.present();
}
}
