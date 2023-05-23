import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Sign_inPage } from '../sign_in/sign_in';
import { VerificationPage } from '../verification/verification';
import { ProvidersCustomerDataProvider } from '../../providers/providers-customer-data/providers-customer-data';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  private FirstName: any;
  private LastName: any;
  private Email: any;
  private MobileNumber: any;
  private Password: any;
  private Address: any;
  private City: any;

  constructor(public navCtrl: NavController,private CustomerServ: ProvidersCustomerDataProvider) {

  }

  sign_in() {
    this.navCtrl.setRoot(Sign_inPage)
  }
  async verification() {
    let myObj = {

      CustomerID: "Null",
      CustomerFirstName: this.FirstName,
      CustomerLastName: this.LastName,
      CustomerEmailAdress: this.Email,
      CustomerMobileNumber: this.MobileNumber,
      Passwored: this.Password,
      CustomerAdress: this.Address,
      CustomerCity: this.City,
    };
   // await this.CustomerServ.RegisterCustomer(myObj);
    console.log(this.FirstName)
    console.log(this.LastName)
    console.log(this.Email)
    console.log(this.MobileNumber)
    console.log(this.Password)
    console.log(this.Address)
    console.log(this.City)

  this.navCtrl.push(VerificationPage)
  }


}
