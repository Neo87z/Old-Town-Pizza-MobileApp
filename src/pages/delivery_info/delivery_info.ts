import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { My_profilePage } from '../my_profile/my_profile';
import { PaymentPage } from '../payment/payment';
@Component({
  selector: 'page-delivery_info',
  templateUrl: 'delivery_info.html'
})
export class Delivery_infoPage {
  public event = {
    month: '',
    time1: '',
    time2: '',
  }

  private DeliverySelected: true;
  private PickupSelected: true;

  private CusDeloverySelected: any;
  private CusPickupSelected: any;

  private MoutnPearlSelcted: any;
  private FreshwaterSelcted: any;
  private HigginsLineSelected: any;

  private ImmdeateDelivery: any;
  private DeliveryAfter: any;
  private Custrom: any;


  private ImmdeateDeliveryTime: any;
  private DeliveryAfterTime: any;
  private CustromTime: any;
  private IsButtonDsiabled: any;

  private SetDeliveryTime: any;
  private SetCustomDeliverTIme: any;
  private SetCustomeDadte: any;


  private SetDelibetryTimeForOrder: any;
  private SetCustomDeliveryTimeForOrder: any;
  private SetCustomerDeliverDateforORder: any;



  private OrderType: any;
  private WhenToDeliver: any;
  private DeliverTime: any;
  private DeliverDate: any;
  private PreferdStrore: any;
  private Address: any;


  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {
    this.DeliverySelected = true;
    this.PickupSelected = true;
    this.CusPickupSelected = true;
    this.CusDeloverySelected = false;
    this.IsButtonDsiabled = false;
    this.ImmdeateDelivery = true;
    this.SetDeliveryTime = false;
    this.SetCustomDeliverTIme = false;
    this.SetCustomeDadte = false;

    this.SetDeliveryTime = false;
    this.SetCustomDeliverTIme = false;
    this.SetCustomeDadte = false;
    this.MoutnPearlSelcted = true


    this.EnableButton();


  }
  handleTimeSelection() {
    console.log(this.event.time1); // Access the selected time value
    this.SetDeliveryTime = true;
    this.SetDelibetryTimeForOrder = this.event.time1

    this.EnableButton();


    // You can perform further actions with the selected time value here
  }

  HandleDateSelected() {
    console.log(this.event.time1); // Access the selected time value
    this.SetCustomDeliverTIme = true;

    this.SetCustomerDeliverDateforORder = this.event.month
    this.EnableButton();


    // You can perform further actions with the selected time value here
  }

  HadnleCustoemTime() {
    console.log(this.event.time1); // Access the selected time value
    this.SetCustomeDadte = true;
    this.SetCustomDeliveryTimeForOrder = this.event.time2


    this.EnableButton();


    // You can perform further actions with the selected time value here
  }

  EnableButton() {



    if (this.ImmdeateDelivery == true || this.DeliveryAfter == true && this.SetDeliveryTime == true || this.Custrom == true && this.SetCustomDeliverTIme == true && this.SetCustomeDadte == true) {
      this.IsButtonDsiabled = true;
    } else {
      this.IsButtonDsiabled = false;
    }




  }
  ChangeTime(STatus) {
    if (STatus == "ImmdeateDelivery") {
      this.ImmdeateDelivery = true;
      this.DeliveryAfter = false;
      this.Custrom = false;
      console.log("ImmdeateDelivery")
      this.EnableButton()

    } else if (STatus == "DeliveryAfter") {
      this.ImmdeateDelivery = false;
      this.DeliveryAfter = true;
      this.Custrom = false;
      console.log("Delivbery")
      this.EnableButton()

    } else if (STatus == "Custrom") {
      console.log("Customm")
      this.ImmdeateDelivery = false;
      this.DeliveryAfter = false;
      this.Custrom = true;
      this.EnableButton()

    }



  }

  ChangeSelectecStore(store) {
    console.log(store)
    if (store == "Freshwater") {
      this.MoutnPearlSelcted = false;
      this.FreshwaterSelcted = true;
      this.HigginsLineSelected = false;

    }

    if (store == "Higgins") {
      this.MoutnPearlSelcted = false;
      this.FreshwaterSelcted = false;
      this.HigginsLineSelected = true;

    }

    if (store == "Mount") {
      this.MoutnPearlSelcted = true;
      this.FreshwaterSelcted = false;
      this.HigginsLineSelected = false;

    }



  }
  StorePickUpSelected() {
    this.CusPickupSelected = true;
    this.CusDeloverySelected = false;

  }



  DeliverSelcetd() {
    console.log("Deklverr")
    this.CusPickupSelected = false;
    this.CusDeloverySelected = true;

  }


  MakeOrder() {




    if (this.CusPickupSelected == true) {
      this.OrderType = "PickUp"
      this.Address = "Null"

    } else {
      this.OrderType = "Delivery"
      this.Address = "266 Freshwater Road"
    }




    if (this.ImmdeateDelivery == true) {
      this.WhenToDeliver = "Now"
      this.DeliverTime = "Now"
      this.DeliverDate = "Now"

    } else if (this.DeliveryAfter == true) {
      this.WhenToDeliver = "CheckTime"
      this.DeliverTime = this.SetDelibetryTimeForOrder

    } else if (this.Custrom == true) {
      this.WhenToDeliver = "Custome"
      this.DeliverTime = this.SetCustomDeliveryTimeForOrder
      this.DeliverDate = this.SetCustomerDeliverDateforORder

    } else {
      this.WhenToDeliver = "Now"
      this.DeliverTime = "Now"
      this.DeliverDate = "Now"

    }





    if (this.MoutnPearlSelcted == true) {
      this.PreferdStrore = "MountPearlStore"

    } else if (this.FreshwaterSelcted == true) {
      this.PreferdStrore = "FreshwaterStore"

    } else if (this.HigginsLineSelected == true) {
      this.PreferdStrore = "HigislineStore"

    }











    let myObj = {


   
        OrderType: this.OrderType,
        WhenToDeliver: this.WhenToDeliver,
        DeliverDate: this.DeliverDate,
        DeliverTime: this.DeliverTime,
        PreferdStrore: this.PreferdStrore,
        Address: this.Address,
        CartID : "64524983766b780eb43d0edf"
      
    };

    console.log("Order Detaisls", myObj)
    this.navCtrl.push(PaymentPage, {
      OrderDetails: myObj
    })

  }

  my_profile() {
    this.navCtrl.push(My_profilePage)
  }
  payment() {
    this.navCtrl.push(PaymentPage, {

    })
  }

}
