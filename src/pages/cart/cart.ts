import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';


import { Offers_discountsPage } from '../offers_discounts/offers_discounts';
import { Delivery_infoPage } from '../delivery_info/delivery_info';
import { PizzaDetailsProvider } from '../../providers/pizza-details/pizza-details';
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  PizzaData: any[] = [];
  public alertButtons = ['OK'];
  private RemoveID: any;
  private TotalAmountDue: any;
  private Tax : any;
  private FinalAfterATx : any;
  

  constructor(public navCtrl: NavController, private PizzaService: PizzaDetailsProvider, private alertController: AlertController) {

  }
  async ngOnInit(): Promise<void> {
    console.log("Here")

    this.TotalAmountDue = 0.0;
    this.FinalAfterATx =0.0;
    this.Tax= 0.0;
    await this.LoadCart()


  }

  CalcTax(){
    this.Tax=(parseFloat(this.TotalAmountDue)/100)*15;
    this.Tax=this.Tax.toFixed(2)
    this.FinalAfterATx=parseFloat(this.TotalAmountDue)+parseFloat(this.Tax);
    this.FinalAfterATx= parseFloat(this.FinalAfterATx).toFixed(2)
    


    
   


  }

  async LoadCart() {


    await this.PizzaService.getCartDetailsById("64524983766b780eb43d0edf").subscribe(res => {


      this.PizzaData = [...this.PizzaData, ...res["Data"]];
      console.log(this.PizzaData)

      this.PizzaData.forEach((element) => {


        this.TotalAmountDue = parseFloat(this.TotalAmountDue) + parseFloat(element.FianlOrderPrice)
        console.log(element.FianlOrderPrice);
      });
      this.CalcTax()


      console.log(this.PizzaData, "Firsdt")



    });


  }
  async presentAlert() {

  }

  async RemoveItem(ID) {
    console.log(ID)
    const alert = await this.alertController.create({
      title: 'Confirm Remove Item',

      message: 'Plese Press Confirm To Remove The Pizza',
      buttons: [{
        text: 'Confirm',
        role: 'confirm',
        handler: () => {
          this.RemoveID = this.PizzaData[ID]._id
          this.PizzaData.splice(ID, 1)
          console.log("Confirmed")
          console.log(this.PizzaData)
          this.PizzaService.RemoveItemFromCart(this.RemoveID);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => { console.log("Canclelled") }
      }],
    });

    await alert.present();
  }
  offers_discounts() {
    this.navCtrl.push(Offers_discountsPage)
  }
  delivery_info() {
    this.navCtrl.push(Delivery_infoPage)
  }

}
