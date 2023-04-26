import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Add_addressPage } from '../add_address/add_address';
@Component({
  selector: 'page-my_profile',
  templateUrl: 'my_profile.html'
})
export class My_profilePage {

  constructor(public navCtrl: NavController) {

  }
	
 add_address(){
        this.navCtrl.push(Add_addressPage)
  } 

}
