import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';



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
        this.navCtrl.push(HomePage);
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
