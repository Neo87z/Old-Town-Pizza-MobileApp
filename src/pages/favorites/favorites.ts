import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Item_infoPage } from '../item_info/item_info';
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
crust: string = "1";
 size: string = "1"; 
 all_categories: string = "pizza";
  constructor(public navCtrl: NavController) {

  }
	 

item_info(){
        this.navCtrl.push(Item_infoPage)
  } 


}
