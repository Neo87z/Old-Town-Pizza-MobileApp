import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Select_locationPage } from '../select_location/select_location';
@Component({
  selector: 'page-add_address',
  templateUrl: 'add_address.html'
})
export class Add_addressPage {

  constructor(public navCtrl: NavController) {

  }
	
 select_location(){
        this.navCtrl.push(Select_locationPage)
  } 

}
