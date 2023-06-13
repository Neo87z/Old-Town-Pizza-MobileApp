import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController, App } from 'ionic-angular';


import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home';
import { ProvidersCustomerDataProvider } from '../../providers/providers-customer-data/providers-customer-data';

@Component({
  selector: 'page-sign_in',
  templateUrl: 'sign_in.html'
})
export class Sign_inPage {
  [x: string]: any;

  private Emaiil: any;
  private Password: any;
  private LoginData: any;

  constructor(public navCtrl: NavController, private CustomerServ: ProvidersCustomerDataProvider, private loadingCtrl: LoadingController, private alertController: AlertController) {

  }

  ngOnInit(): void {
    this.RemoveInfo();
  }
  async register() {
    let myObj = {
      CustomerEmailAdress: this.Emaiil,
      Passwored: this.Password,
    };

    // Show the loading spinner
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      duration: 0, // Set duration to 0 for an indefinite spinner
    });
    loading.present();

    try {
      // Perform the login verification
      this.LoginData = await this.CustomerServ.LoginVerification(myObj);

      // Simulate a delay for demonstration purposes (remove in production)
      await new Promise(resolve => setTimeout(resolve, 6000));

      // Retrieve the login data again (optional)
      this.LoginData = await this.CustomerServ.LoginVerification(myObj);

      console.log(this.LoginData, "dataaaaaa");

      if (this.LoginData.Status === true) {
        console.log("Login");

        await this.StoreLoginInfo()
        this.navCtrl.setRoot(MyApp)
      } else {
        console.log("Login Fail");
        this.presentAlert()
      }

      // Navigate to the appropriate page
      // this.navCtrl.push(RegisterPage);
    } catch (error) {
      console.log("Error occurred during login:", error);
    } finally {
      // Hide the loading spinner
      loading.dismiss();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({


      message: 'Invalid Login Details',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async StoreLoginInfo() {
    window.localStorage.setItem('CUSTOMER_EMAIL', this.LoginData.CustomerData.CustomerEmailAdress);
    window.localStorage.setItem('FIRST_NAME', this.LoginData.CustomerData.CustomerFirstName);
    window.localStorage.setItem('LAST_NAME', this.LoginData.CustomerData.CustomerLastName);
    window.localStorage.setItem('CUSTOMER_MOBILE', this.LoginData.CustomerData.CustomerMobileNumber);
    window.localStorage.setItem('CUSTOMER_ADDRESS', this.LoginData.CustomerData.CustomerAdress);
    window.localStorage.setItem('CUSTOMER_CustomerCity', this.LoginData.CustomerData.CustomerCity);
    window.localStorage.setItem('Login_Status', 'True');
  }

  async RemoveInfo() {
    window.localStorage.removeItem('CUSTOMER_EMAIL');
    window.localStorage.removeItem('FIRST_NAME');
    window.localStorage.removeItem('LAST_NAME');
    window.localStorage.removeItem('CUSTOMER_MOBILE');
    window.localStorage.removeItem('CUSTOMER_ADDRESS');
    window.localStorage.removeItem('CUSTOMER_CustomerCity');
    window.localStorage.setItem('Login_Status', 'False');
  }



  async showLoading() {
    const loading = await this.loadingCtrl.create({
      spinner: 'crescent',
      duration: 3000,


    });

    loading.present();
  }
  home() {
    this.navCtrl.setRoot(HomePage)
  }


}
