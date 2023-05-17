import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Order_infoPage } from '../order_info/order_info';
import { PizzaDetailsProvider } from '../../providers/pizza-details/pizza-details';
@Component({
  selector: 'page-my_orders',
  templateUrl: 'my_orders.html'
})
export class My_ordersPage {

  private PizzaDatNew : any;

  constructor(public navCtrl: NavController, private PizzaService: PizzaDetailsProvider) {

  }

  order_info() {
    this.navCtrl.push(Order_infoPage)
  }

  ngOnInit(): void {
    this.LoadCart()


  }
  async LoadCart() {

    console.log("hreeeeeeeeeee")
    await this.PizzaService.getORderForCustomer("64524983766b780eb43d0edf").subscribe(res => {


      console.log(res["Data"])
      //this.PizzaData = [...this.PizzaData, ...res["Data"]];

      this.PizzaDatNew = res["Data"]
      console.log(this.PizzaDatNew)




      console.log(this.PizzaDatNew, "Firsdt")



      console.log(this.PizzaDatNew[0].OrderDetails[0].OrderProgress,"Test")



    });


  }

}
