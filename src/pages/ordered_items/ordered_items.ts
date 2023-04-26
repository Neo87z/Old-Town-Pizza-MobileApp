import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-ordered_items',
  templateUrl: 'ordered_items.html'
})
export class Ordered_itemsPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

   dismiss() {
		this.viewCtrl.dismiss();
	}

}
