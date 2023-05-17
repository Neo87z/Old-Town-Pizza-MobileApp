import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Order_placedPage } from '../order_placed/order_placed';
import { PizzaDetailsProvider } from '../../providers/pizza-details/pizza-details';
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  private OrdeDeatails: any;
  private CashSelected: any;
  private DebitSelected: any;
  private PizzaData: any;

  private PizzaDatNew: any;
  private FinalpaymentType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private PizzaService: PizzaDetailsProvider) {
    this.OrdeDeatails = navParams.get('OrderDetails');
    console.log(this.OrdeDeatails, "lol")

  }

  ngOnInit(): void {
    this.LoadCart()
    this.FinalpaymentType = "Cash"

  }
  async LoadCart() {

    console.log("hreeeeeeeeeee")
    await this.PizzaService.getCartDetailsById("64524983766b780eb43d0edf").subscribe(res => {


      console.log(res["Data"])
      //this.PizzaData = [...this.PizzaData, ...res["Data"]];

      this.PizzaDatNew = res["Data"]
      console.log(this.PizzaDatNew)




      console.log(this.PizzaDatNew, "Firsdt")



    });


  }


  chnageSelectedPaymentCash() {
    this.CashSelected = true;
    this.DebitSelected = false;
    this.FinalpaymentType = "Cash"



  }
  chnageSelectedPaymentDeit() {
    this.CashSelected = false;
    this.DebitSelected = true;
    this.FinalpaymentType = "Debit"



  }

  async placeOrder() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Example: "5/16/2023"
    const formattedTime = currentDate.toLocaleTimeString(); // Example: "10:30:45 AM"

    console.log(formattedDate, formattedTime)
    console.log(this.OrdeDeatails.OrderType, 'hereeeeeeeeeeeeeeeeeeeee2')
    let myObj = {



      OrderID: "NA",
      OrderToMake: this.PizzaDatNew,




      OrderDetails: [{
        OrderType: this.OrdeDeatails.OrderType,
        WhenToDeliver: this.OrdeDeatails.WhenToDeliver,
        DeliverDate: this.OrdeDeatails.DeliverDate,
        DeliverTime: this.OrdeDeatails.DeliverTime,
        PreferdStrore: this.OrdeDeatails.PreferdStrore,
        Address: this.OrdeDeatails.Address,
        CartID: this.OrdeDeatails.CartID,
        PlacedTime : formattedTime,
        PlacedDate : formattedDate,
        OrderProgress : "Pending"
      }],
      PaymentType: this.FinalpaymentType,
      PaymentStatus: "Approved"







    }
    let myJSON = JSON.stringify(myObj);
    console.log(myJSON, "OrderPrint")
    await this.PizzaService.AddConfirmedOrder(myObj);

    this.order_placed()
  }

  order_placed() {
    this.navCtrl.push(Order_placedPage)
  }

}
